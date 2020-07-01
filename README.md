Welcome to the implementation of:

# Super Blogs and News Aggregator!

Visit [lucas-eugenio](https://github.com/lucas-eugenio) on GitHub for more.
___

## Running Project:

### Prerequisites:
- Maven package (**$ sudo apt-get install maven** on Linux or Mac).
- Yarn package (**$ sudo sudo apt install yarn** on Linux or Mac).

### Spring App (BackEnd):

Too run the Spring App, run the following commands on **/Aggreggator** folder:
- **$ cd /backend**
- **$ mvn spring-boot:run**

### React App (FrontEnd):

To run the React App, run the following commands:
- **$ cd /frontend**
- **$ yarn install**
- **$ yarn start**

Doing this you shoud see a new tab of your default browser opened on the pataform, running on **localhost:3000**.

___

## Versions:

### Version 0.0.0:
- Add initial setup for SpringBoot and React.
- Creates **backend**, **frontend** and **lib** folders, and also a **README** file
- **/backend** contains the Java implementation of the plataform.
- **/frontend** contains the React implementation of the plataform.
- **/lib** contains other usefull stuff like JUnit.

### Version 0.1.0:
- Add frontend implementation for FormCard and SiteCard.
- Add a placeholder for NewsFeed.

### Version 0.2.0:
- Add backend inplementatio for FeedController, FeedService and some Models.
- Create **/feed** that receive a list of RSS feed URLs and consolidate them.

### Version 0.3.0:
- Add frontend implementation for NewsCard and NewsFetcher.
- Populate NewsCard with the results from **/feed** API.
- Major refactoring to create some abstractions and other components.

### Version 0.3.1:
- Add chech for error while parsing News.
- Add **hasError** on **Feed** Class.

### Version 0.4.0:
- Small refactors.
- Add some attributes and functions on **Feed** and **News** class.
- Add Filters on **/feed** endpoint for accept **keyWords**, **startAt** and **endAt**.

### Version 0.5.0:
- Add filters Forms and List on FE.

### Version: 1.0.0:
- First Official Release.