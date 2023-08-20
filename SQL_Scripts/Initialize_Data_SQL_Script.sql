CREATE DATABASE  IF NOT EXISTS `reactlibrarydatabase` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `reactlibrarydatabase`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `author` varchar(45) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `copies` int(11) DEFAULT NULL,
  `copies_available` int(11) DEFAULT NULL,
  `category` varchar(11) DEFAULT NULL,
  `img` MEDIUMBLOB  DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(45) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `rating` decimal (3,2) DEFAULT NULL,
  `book_id` BIGINT(20) DEFAULT NULL,
  `review_description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


INSERT INTO `review` VALUES 
	(1, 'arka.bhuiyan@gmail.com', NOW(), 4, 1, 'First book is pretty good book overall'),
	(2, 'newaz.sharif@gmail.com', NOW(), 4.5, 2, 'Second books is pretty good book overall');
    
    
DROP TABLE IF EXISTS `checkout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `checkout` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(45) DEFAULT NULL,
  `checkout_date` varchar(45) DEFAULT NULL,
  `return_date` varchar(45) DEFAULT NULL,
  `book_id` BIGINT(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

-- INSERT INTO `checkout` VALUES 
-- 	(1, 'example1user@email.com', '2022-05-22', '2022-06-25', 1),
--     (2, 'example2user@email.com', '2022-05-22', '2022-06-26', 1),
--     (3, 'example1user@email.com', '2022-05-22', '2022-06-01', 2);
    
    

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `question` text DEFAULT NULL,
  `admin_email` varchar(45) DEFAULT NULL,
  `response` text DEFAULT NULL,
  `closed` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

-- INSERT INTO `messages` VALUES 
-- 	(1, 'example3user@email.com', 'What should we do here?', 'I have been trying to work this out for a long time and no matter what happens I cannot figure this dang thing out', 'example1user@email.com', 'I do not know what to tell you friend. You are on your own.', 1),
--     (2, 'example2user@email.com', 'What should we do here example 2 user?', 'I have been trying to work this out for a long time and no matter what happens I cannot figure this dang thing out', 'example1user@email.com', 'I do not know what to tell you friend. You are on your own.',  1);
    

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `history` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(45) DEFAULT NULL,
  `checkout_date` varchar(45) DEFAULT NULL,
  `returned_date` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `author` varchar(45) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `img` MEDIUMBLOB  DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

