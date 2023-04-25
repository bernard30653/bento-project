CREATE DATABASE  IF NOT EXISTS `project_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project_db`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: project_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer_master`
--

DROP TABLE IF EXISTS `customer_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_master` (
  `MEMBER_ID` char(10) NOT NULL,
  `MEMBER_NAME` varchar(20) DEFAULT NULL,
  `MEMBER_TEL` varchar(15) DEFAULT NULL,
  `MEMBER_MAILl` varchar(50) DEFAULT NULL,
  `MEMBER_ADDR` varchar(80) DEFAULT NULL,
  `MEMBER_TIER` varchar(1) DEFAULT NULL,
  `MEMBER_POINT` int DEFAULT NULL,
  PRIMARY KEY (`MEMBER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_master`
--

LOCK TABLES `customer_master` WRITE;
/*!40000 ALTER TABLE `customer_master` DISABLE KEYS */;
INSERT INTO `customer_master` VALUES ('M01','周紹謙','0911123123','123@gmail.com','台北市信義區信義路','V',400),('M02','徐卉妘','0912456456','456@gmail.com','桃園市桃園區三民路','V',200),('M03','曾柏誠','0913789789','789@gmail.com','新竹市東區光復路','N',500),('M04','吳劉軒','0956565656','5656@gmail.com','新北市板橋區民生路','N',100);
/*!40000 ALTER TABLE `customer_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main`
--

DROP TABLE IF EXISTS `main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main` (
  `MAIN_ID` char(3) NOT NULL,
  `MAIN_DESCRIPTION` varchar(20) DEFAULT NULL,
  `MAIN_PRICE` int DEFAULT NULL,
  PRIMARY KEY (`MAIN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main`
--

LOCK TABLES `main` WRITE;
/*!40000 ALTER TABLE `main` DISABLE KEYS */;
INSERT INTO `main` VALUES ('M01','爌肉',80),('M02','蔥爆牛肉',90),('M03','滷雞腿',100),('M05','煎鱈魚',100),('M06','起司雞排',100),('M07','起司豬排',100),('M08','泰式雞排',110),('M09','宮保雞丁',80),('M10','香煎鯖魚',85),('M11','香煎秋刀魚',90),('M12','炸雞腿',100),('M13','炸雞排',100),('M14','炸排骨',80),('M15','虱目魚肚',90),('M16','三杯雞肉',90),('MO4','滷排骨',80);
/*!40000 ALTER TABLE `main` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_type`
--

DROP TABLE IF EXISTS `payment_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_type` (
  `PAYMENT_TYPE` char(3) NOT NULL,
  `PAYMENT_DESCRIPTION` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`PAYMENT_TYPE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_type`
--

LOCK TABLES `payment_type` WRITE;
/*!40000 ALTER TABLE `payment_type` DISABLE KEYS */;
INSERT INTO `payment_type` VALUES ('P01','現金支付'),('P02','信用卡支付'),('P03','網銀匯款'),('P04','行動支付');
/*!40000 ALTER TABLE `payment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_order_information`
--

DROP TABLE IF EXISTS `sales_order_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_order_information` (
  `MEMBER_ID` char(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `MEMBER_NAME` varchar(20) DEFAULT NULL,
  `MAIN` varchar(8) DEFAULT NULL,
  `SIDE` varchar(8) DEFAULT NULL,
  `ORDER_DATE` datetime DEFAULT NULL,
  `ORDER_NUMBER` varchar(45) DEFAULT NULL,
  `PAYMENT_TYPE` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `POD` char(1) DEFAULT NULL,
  `ORDER_AMOUNT` int DEFAULT NULL,
  PRIMARY KEY (`MEMBER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_order_information`
--

LOCK TABLES `sales_order_information` WRITE;
/*!40000 ALTER TABLE `sales_order_information` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales_order_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `side`
--

DROP TABLE IF EXISTS `side`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `side` (
  `SIDE_ID` char(3) NOT NULL,
  `SIDE_DESCRIPTION` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`SIDE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `side`
--

LOCK TABLES `side` WRITE;
/*!40000 ALTER TABLE `side` DISABLE KEYS */;
INSERT INTO `side` VALUES ('S01','鐵板豆腐'),('S02','螞蟻上樹'),('S03','豬耳朵'),('S04','鳳梨番茄炒苦瓜'),('S05','蒸蛋'),('S06','滷蛋'),('S07','滷桂竹筍'),('S08','滷白蘿蔔'),('S09','嫩薑炒絲瓜'),('S10','煎香腸'),('S11','菜脯蛋'),('S12','番茄炒蛋'),('S13','麻婆豆腐'),('S14','荷包蛋'),('S15','彩椒炒杏鮑菇'),('S16','馬鈴薯燉肉'),('S17','茭白筍炒肉絲'),('S18','香煎豆腐'),('S19','韭菜炒豬肉'),('S20','苦瓜鹹蛋'),('S21','洋蔥炒蛋'),('S22','客家小炒'),('S23','青椒炒肉絲'),('S24','長豆炒肉絲'),('S25','金瓜炒米粉'),('S26','花椰菜'),('S27','炒龍鬚菜'),('S28','炒菇'),('S29','炒高麗菜'),('S30','炒海瓜子'),('S31','炒茄子'),('S32','炒青江菜'),('S33','炒空心菜'),('S34','炒豆芽菜'),('S35','炒豆包'),('S36','炒地瓜葉'),('S37','炒四季豆'),('S38','炒水蓮'),('S39','豆干炒肉絲'),('S40','白菜獅子頭'),('S41','小黃瓜炒蛋'),('S42','三杯豆腐杏鮑菇');
/*!40000 ALTER TABLE `side` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-23  7:26:10
