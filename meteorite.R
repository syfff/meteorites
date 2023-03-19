# import related libraries
library(tidyverse)
library(ggplot2)
library(dplyr)
library(stringr)
library(sp)
library(rworldmap) # for coordination 


# read the input dataset
df = read.csv("/Users/shenyifan/Downloads/Meteorite_Landings.csv")

# rename the columns
df <- df %>% rename(mass = mass..g.,
                    fall_found = fall, 
                    lat = reclat, 
                    long = reclong,
                    class = recclass)

# remove the relict nametype
df = df[df$nametype != 'Relict',]

# check duplicated columns
sum(duplicated(df$id))
sum(duplicated(df[c("lat", "long")]))

# drop the nametype columns
drops <- c("nametype")
df <- df[ , !(names(df) %in% drops)]

# count the number of records missing coordinate information
sum(is.na(df$"lat") | is.na(df$"long"))

# count the number of records missing mass
sum(is.na(df$"mass"))

# drop the records whose mass/coordinate is missing
df <- df[!is.na(df$mass), ]
df <- df[!is.na(df$lat), ]
df <- df[!is.na(df$long), ]
df <- df[!is.na(df$year), ]
df <- df[!(df$lat==0 & df$long==0), ]

# plot the (lat, long) of the records
ggplot(df, aes(lat, long)) +
  geom_point(shape=1, size = 0.4)


# keep only letters in the meteorite name
df$name <- gsub("[^A-Za-z ]","",df$name)
df$name <- trimws(df$name, which = c("right"), whitespace = "[ \t\r\n]")

# save to a csv file
write.csv(df, "/Users/shenyifan/Downloads/Meteorite_Landings_Cleaned.csv")

# The single argument to this function, points, is a data.frame in which:
#   - column 1 contains the longitude in degrees
#   - column 2 contains the latitude in degrees
coords2continent = function(points)
{  
  countriesSP <- getMap(resolution='low')
  #countriesSP <- getMap(resolution='high') #you could use high res map from rworldxtra if you were concerned about detail
  
  # converting points to a SpatialPoints object
  # setting CRS directly to that from rworldmap
  pointsSP = SpatialPoints(points, proj4string=CRS(proj4string(countriesSP)))  
  
  
  # use 'over' to get indices of the Polygons object containing each point 
  indices = over(pointsSP, countriesSP)
  
  #indices$continent   # returns the continent (6 continent model)
  indices$REGION   # returns the continent (7 continent model)
  #indices$ADMIN  #returns country name
  #indices$ISO3 # returns the ISO3 code 
}

coords2country = function(points)
{  
  countriesSP <- getMap(resolution='low')
  pointsSP = SpatialPoints(points, proj4string=CRS(proj4string(countriesSP)))  
  indices = over(pointsSP, countriesSP)
  indices$ADMIN  #returns country name
}

coords2iso = function(points)
{  
  countriesSP <- getMap(resolution='low')
  pointsSP = SpatialPoints(points, proj4string=CRS(proj4string(countriesSP)))  
  indices = over(pointsSP, countriesSP)
  indices$ISO3 # returns the ISO3 code 
}

# get continent, country, and iso3 information
df$continent <- coords2continent(data.frame(df$long, df$lat))
df$country <- coords2country(data.frame(df$long, df$lat))
df$iso3 <- coords2iso(data.frame(df$long, df$lat))

count <- df %>%
  group_by(country, iso3, continent) %>%
  summarise(cnt = n()) 

count <- count[order(-count$cnt),]
  
# save to csv file
write.csv(count, "/Users/shenyifan/Downloads/Meteorite_Landings_Count.csv")

# order mass by categories
df$masscategory <- cut(df$mass,
                        breaks=c(0, 1, 10, 100, 1000000000),
                        labels=c('1g or less', '1g to 10g', '10g to 100g', 'greater than 100g'))

df <- df[,!names(df) %in% c("masslessthan1g")]

# order year by categoris
df$yearCategory <- cut(df$year,
                       breaks=c(0, 1850, 1900, 1950, 3000),
                       labels=c('Before 1850', '1850 to 1900', '1900 to 1950', 'After 1950'))

count2 <- df %>%
  group_by(continent, fall_found, masscategory) %>%
  summarise(cnt = n()) 

count2 <- count2[!is.na(count2$continent), ]

# reformat the columns for the sankey diagram
sankey0 <- df %>%
  group_by(yearCategory, fall_found) %>%
  summarise(cnt = n()) 
colnames(sankey0)[1] ="source"
colnames(sankey0)[2] ="target"
colnames(sankey0)[3] ="value"

sankey1 <- df %>%
  group_by(fall_found, continent) %>%
  summarise(cnt = n()) 
sankey1 <- sankey1[!is.na(sankey1$continent),]
colnames(sankey1)[1] ="source"
colnames(sankey1)[2] ="target"
colnames(sankey1)[3] ="value"

sankey2 <- df %>%
  group_by(continent, masscategory) %>%
  summarise(cnt = n()) 
sankey2 <- sankey2[!is.na(sankey2$continent),]
colnames(sankey2)[1] ="source"
colnames(sankey2)[2] ="target"
colnames(sankey2)[3] ="value"

# combine three dataframe vertically 
df_new <- bind_rows(sankey0, sankey1, sankey2)

# export the cleaned data file
write.csv(df_new, "/Users/shenyifan/Downloads/Meteorite_Landings_Sankey.csv")

# prepare a dataframe for the word cloud
commonest_name <- df %>%
  group_by(name) %>%
  summarise(cnt = n()) 

commonest_name <- commonest_name[order(-commonest_name$cnt),]

# get the frequency of the names
frequency <- data.frame(table(unlist(strsplit(df$name, " "))))
frequency <- frequency[frequency$Freq >= 10,]
# frequency <- frequency[length(frequency$Var1)>=3,]
frequency <- frequency[nchar(as.character(frequency$Var1)) >= 3, ]
colnames(frequency)[1] ="word"

first <- c()
second <- c()
third <- c()

# count the top three appearances for each word
for (word in frequency$word){
  cnt = 0
  for (phrase in commonest_name$name){
    list <- unlist(strsplit(phrase," "))
    if (cnt < 3){
      if (word %in% list){
        cnt <- cnt + 1
        if (cnt == 1){
          first <- append(first, phrase)
        } else if (cnt == 2){
          second <- append(second, phrase)
        } else{
          third <- append(third, phrase)
        } 
      }
    }
  }
  if (cnt == 2){
    third <- append(third, ' ')
  } else if (cnt == 1){
    second <- append(second, ' ')
    third <- append(third, ' ')
  } else if (cnt == 0){
    first <- append(first, ' ')
    second <- append(second, ' ')
    third <- append(third, ' ')
  }
}

frequency$first <- first
frequency$second <- second 
frequency$third <- third 

# rename the columns
colnames(frequency)[1] ="text"
colnames(frequency)[2] ="value"
colnames(frequency)[3] ="text1"
colnames(frequency)[4] ="text2"
colnames(frequency)[5] ="text3"

# export to a csv file
write.csv(frequency, "/Users/shenyifan/Downloads/frequency.csv")

# get the average mass by categories
df$class <- tolower(df$class)
df$class <- sub("([A-Za-z]+).*", "\\1", df$class)
df$name <- tolower(df$name)

heaviest <- df %>%
  group_by(class,continent) %>%
  summarise(avg = mean(mass), cnt = n()) %>%
  top_n(10)

mostcommon <- df %>%
  group_by(class) %>%
  summarise(cnt = n()) %>%
  top_n(30)

df1 <- rbind(heaviest)
# df1 <- rbind(heaviest, lightest)
write.csv(df1, "/Users/shenyifan/Downloads/classmass1.csv")

heaviest_name <- df %>%
  group_by(class, name) %>%
  summarise(avg = mean(mass)) %>%
  top_n(20)

df$name_first <- substr(df$name, 1, 1) 
df$name_second <- substr(df$name, 1, 2) 
df$name_third <- substr(df$name, 1, 3) 

df[df$year == 2012,] %>% 
  group_by(name_first) %>% 
  summarise(cnt = n()) %>%
  top_n(10)


