library(tidyverse)
library(ggplot2)
library(dplyr)
library(stringr)

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

# df$masslog = log(df$mass)
# 
# ggplot(df, aes(x=masslog)) + 
#   geom_histogram(bins=10, 
#                  breaks = seq(-20, 30, by = 5))
# 
# 
# ggplot(df, aes(x=mass)) + 
#   geom_histogram(bins=10, 
#                  breaks = seq(0, 6000, by = 600))

# keep only letters in the meteorite name
df$name <- gsub("[^A-Za-z ]","",df$name)
df$name <- trimws(df$name, which = c("right"), whitespace = "[ \t\r\n]")

# export the cleaned data file
write.csv(df, "/Users/shenyifan/Downloads/Meteorite_Landings_Cleaned.csv")

commonest_name <- df %>%
  group_by(name) %>%
  summarise(cnt = n()) 

commonest_name <- commonest_name[order(-commonest_name$cnt),]

frequency <- data.frame(table(unlist(strsplit(df$name, " "))))
frequency <- frequency[frequency$Freq >= 10,]
# frequency <- frequency[length(frequency$Var1)>=3,]
frequency <- frequency[nchar(as.character(frequency$Var1)) >= 3, ]
colnames(frequency)[1] ="word"

first <- c()
second <- c()
third <- c()

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

colnames(frequency)[1] ="text"
colnames(frequency)[2] ="value"
colnames(frequency)[3] ="text1"
colnames(frequency)[4] ="text2"
colnames(frequency)[5] ="text3"
write.csv(frequency, "/Users/shenyifan/Downloads/frequency.csv")


df$class <- tolower(df$class)
df$class <- sub("([A-Za-z]+).*", "\\1", df$class)
df$name <- tolower(df$name)

heaviest <- df %>%
  group_by(class) %>%
  summarise(avg = mean(mass), cnt = n()) %>%
  top_n(15)

mostcommon <- df %>%
  group_by(class) %>%
  summarise(cnt = n()) %>%
  top_n(15)

# lightest <- df %>%
#   group_by(class) %>%
#   summarise(avg = mean(mass)) %>%
#   arrange(avg) %>% 
#   top_n(-20)

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
