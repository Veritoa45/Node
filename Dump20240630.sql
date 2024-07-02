-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: biblioteca
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,'Antoine de Saint-Exupéry'),(2,'George Orwell'),(3,'Gabriel García Márquez'),(4,'Jane Austen'),(5,'J.K. Rowling'),(6,'Miguel de Cervantes'),(7,'Carlos Ruiz Zafón'),(8,'J.R.R. Tolkien'),(9,'Harper Lee'),(10,'F. Scott Fitzgerald'),(11,'Ricardo Romero'),(12,'Anthony Burgess'),(13,'Franz Kafka'),(14,'Donald F. Glut');
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejemplares`
--

DROP TABLE IF EXISTS `ejemplares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejemplares` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `id_libro` bigint NOT NULL,
  `editorial` varchar(45) NOT NULL,
  `anio_edicion` varchar(5) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `en_biblioteca` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_libre_idx` (`id_libro`),
  CONSTRAINT `id_libre` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejemplares`
--

LOCK TABLES `ejemplares` WRITE;
/*!40000 ALTER TABLE `ejemplares` DISABLE KEYS */;
/*!40000 ALTER TABLE `ejemplares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libros` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `id_autor` bigint NOT NULL,
  `genero` varchar(15) NOT NULL,
  `tapa` varchar(255) NOT NULL,
  `resumen` varchar(255) NOT NULL,
  `ISBN` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_autor_idx` (`id_autor`),
  CONSTRAINT `id_autor` FOREIGN KEY (`id_autor`) REFERENCES `autores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` VALUES (1,'El principito',1,'Infantil','../uploads/ElPrincipito.webp','Un joven príncipe viaja por el universo y descubre el verdadero significado del amor y la amistad.',9780156012195),(2,'1984',2,'Ficción','../uploads/1984.webp','En un mundo distópico controlado por un gobierno totalitario, un hombre desafía el sistema y lucha por la libertad y la verdad.',9780451524935),(3,'Cien años de soledad',3,'Realismo','../uploads/CienAñosdeSoledad.webp','La historia de la familia Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo, donde se entrelazan lo real y lo mágico.',9780307474728),(4,'Orgullo y prejuicio',4,'Novela','../uploads/OrgulloyPrejuicio.webp','La historia de amor entre Elizabeth Bennet y el Sr. Darcy en la Inglaterra del siglo XIX, donde la clase social y el orgullo juegan un papel crucial.',9780141439518),(5,'Harry Potter y la piedra filosofal',5,'Fantasía','../uploads/HarryPotter.webp','Un joven mago descubre su verdadera identidad en el mundo mágico y se embarca en una emocionante aventura en la escuela de magia de Hogwarts.',9788498387544),(6,'Don Quijote de la Mancha',6,'Novela','../uploads/DonQuijotedelaMancha.webp','Las aventuras de un caballero enloquecido y su fiel escudero Sancho Panza en la España del siglo XVII, que satiriza la sociedad y la cultura de la época.',9788426102951),(7,'La sombra del viento',7,'Novela','../uploads/LaSombradelViento.webp','Un joven descubre un misterioso libro en el Cementerio de los Libros Olvidados y se adentra en una trama de secretos, misterios y amor en el Barcelona de posguerra.',9788408079545),(8,'El señor de los anillos: La comunidad del anillo',8,'Fantasía','../uploads/ElSeñordelosAnillos.webp','Frodo Bolsón y un grupo de compañeros emprenden un peligroso viaje para destruir un anillo maligno y salvar la Tierra Media de la oscuridad.',9788445071409),(9,'Matar a un ruiseñor',9,'Novela','../uploads/MataraunRuiseñor.webp','La historia de la niña Scout Finch y su padre Atticus, un abogado que defiende a un hombre negro acusado injustamente de violación en la Alabama de los años 30.',9780061120084),(10,'Crónica de una muerte anunciada',3,'Realismo','../uploads/CronicadeunaMuerteAnunciada.webp','En un pequeño pueblo caribeño, los habitantes saben que alguien será asesinado, pero nadie hace nada para evitarlo, en una trama de honor, venganza y fatalidad.',9781400034956),(11,'El gran Gatsby',10,'Novela','../uploads/ElGranGatsby.webp','La historia del millonario Jay Gatsby y su obsesión por recuperar a su antiguo amor, Daisy Buchanan, en la glamurosa Nueva York de los años 20.',9788433902325),(12,'La naranja mecánica',12,'Realismo','../uploads/LaNaranjaMecanica.webp','La historia de Alex DeLarge, un joven delincuente que es sometido a un experimento de condicionamiento de la conducta en una sociedad distópica.',9780393312836),(14,'Los Bailarines del fin del mundo',11,'Novela','../uploads/1719597019660.webp','se reencontrarán con el amistoso terceto protagonista que debutó con ella: los increíbles Abelev. Muishkin y Maglier. los íntegros amigos rengos de cuerpo y alma marcados por el síndrome de Tourette. ',9789872490027),(25,'El spleen de los muertos',11,'Novela','../uploads/1719642382529.webp','Tras el descenso ad ínferosque significó la excursión al Centro de la Tierra. ',9789872679019),(37,'Carta al Padre',13,'Epistola','../uploads/1719714932289.webp','arta al padre no es sólo una de las misivas más desgarradoras jamás redactadas, por lo profundo del análisis alrededor de la autoridad y el amor filial',9786289520026),(38,'Star Wars El imperio contraataca',13,'Cienci Ficcion','../uploads/1719720484008.webp','Tras la destrucción de la Estrella de la Muerte, los Rebeldes se han establecido en el frío planeta de Hoth, donde no tardan en ser atacados. Luke continúa su entrenamiento Jedi junto al maestro Yoda',8470179160);
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestamos`
--

DROP TABLE IF EXISTS `prestamos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestamos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `socio_id` bigint NOT NULL,
  `id_ejemplar` bigint NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `concluido` tinyint NOT NULL,
  `fecha_devolucion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ejemplar_idx` (`id_ejemplar`),
  KEY `socio_id_idx` (`socio_id`),
  CONSTRAINT `id_ejemplar` FOREIGN KEY (`id_ejemplar`) REFERENCES `ejemplares` (`id`),
  CONSTRAINT `socio_id` FOREIGN KEY (`socio_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestamos`
--

LOCK TABLES `prestamos` WRITE;
/*!40000 ALTER TABLE `prestamos` DISABLE KEYS */;
/*!40000 ALTER TABLE `prestamos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `mail` varchar(80) NOT NULL,
  `pssword` varchar(255) NOT NULL,
  `rol` enum('socio','admin') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`mail`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=174 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Administrador','Administrador','123456789','admin@gmail.com','$2a$10$12U2PoWXe/KOSJZcp7K6C.J1mRhYiK2CqRt63.A3035DHQFTaSJVS','admin'),(2,'Socio 1','Apellido','23456764','socio1@live.com','$2a$10$12U2PoWXe/KOSJZcp7K6C.J1mRhYiK2CqRt63.A3035DHQFTaSJVS','socio'),(129,'socio12','socio11','1232354345245','ffrontera1@live.com','$2a$08$j8P.pkYnryUARWaH0kwz4ufaogpjc7zspUHjwXdTbAhedh2pde3ky','socio'),(131,'socio12','socio11','1232354345245','ffrontera2@live.com','$2a$08$KDA2yDvvrO8j/ZYYZc.GS.B/TxGIUEs1LiDXZYw00.AOhSO5R/fKW','socio'),(135,'socio12','socio11','1232354345245','ffrontera3@live.com','$2a$08$98oC1ZAEFUAFJBU10NjJE.e.oUv0hD379U.94NUakfJlFsoXbvtkW','socio'),(137,'socio12','socio11','1232354345245','ffrontera32@live.com','$2a$08$f5YU3tcRD2Ey1Mu0x0ZDWeW//iO0ICawpXBGnogezhnlrsgO/i0hq','socio'),(148,'socio12','socio11','1232354345245','ffrontera122@live.com','$2a$08$Y6uMS49NquhqF9kbW.difOFSiF1YdwWLJSzF7E3yHAAMmcPLEeO5G','socio'),(150,'socio12','socio11','1232354345245','ffrontera1222@live.com','$2a$08$gJsEv6ayamLz/YaFfzWlpeYTAJ1jVtW5HRgtFLH1QkHhaTdW.Qkvm','socio'),(151,'socio12','socio11','1232354345245','ffrontera12222@live.com','$2a$08$bMlUY67jeBQNc6nA8sC1netUezWnd3fAYwu2S.1/sG8hLS..wDxTu','socio'),(156,'socio12','socio11','1232354345245','ffrontera122223@live.com','$2a$08$2.6SN70zbdeDD2aURyCWY.r7wiLOSbwYCDxI/nQ2uqsic/ObBzO0q','socio'),(158,'Federico','Frontera','3515917873','ffrontera@live.com','$2a$08$4D6PEyckGW5adH2L8ofrCebLs.Iw.MC8C9xii74anDC/CuVb/iG4O','socio'),(159,'Federico','Frontera','3515917873','ffrontera12312@live.com','$2a$08$QZpI/N4ahpSmjpz/csm4b.F.OxTpjHLn9UQVeeVPu91k7gAj40tcW','socio'),(160,'Federico','Frontera','23423412','ffrontera1231@live.com','$2a$08$La7sVf2Vz..KYKVZP7iwleh77xDbiYH6LcJUDweD5tZVIIg2.5a6C','socio'),(161,'Federico','Frontera','23423412','ffrontera12131@live.com','$2a$08$7SurncrKMZg9cdJxolbwbeSF227AbHGA8j.c1APJijRVnx4OqQcwC','socio'),(162,'Federico','Frontera','6577564756','ffrontera423424@live.com','$2a$08$dyVmmcHKmZz5IVHI5SHRK.FTE6H3zSIQj4YkODlE5rer5HMnTdYci','socio'),(163,'Federico','Frontera','3423414234','ffrontera1212@live.com','$2a$08$9v.efeI1h0B/Zof3L1rGRedxwydsGwx45LDXfWQlNMXOPTGIlgCYC','socio'),(164,'Federico','Frontera','5425234','ffrontera123121@live.com','$2a$08$OXNO6vk4fFafSuX2RpqlJ.gZSc2VCigFMYdVIDvW2ABvzYluutaTG','socio'),(165,'Federico','Frontera','34353234','ffronteradsfdf@live.com','$2a$08$kYYNylejTV3jssgnSZ1.LOUMzIvqSC13a3EvEjlB/W4tX7Z9gll7y','socio'),(166,'Federico','Frontera','3515917873','ffronteradfsgdfg@live.com','$2a$08$vfQdC7Au91YNxSoJXv4mhuhuKixKbDQUHyE68/EEMkDPhhGCW.V62','socio'),(168,'Federico','Frontera','3515917873','ffrontera21@live.com','$2a$08$iRqrR.g7Wqkr34a3fxKsieQExf/09es.9ND6X9EC/nSwg/qa0dE7u','socio'),(169,'Federico','Frontera','6456356435','ffronteradvdv@live.com','$2a$08$qakp18fN.ohs7Ogj4.lGJ.HaoKELFyPxwLUY1kbI7wzHtQP9o0Doi','socio'),(170,'Federico','Frontera','435435','ffronteravcxvd@live.com','$2a$08$/I4fgFVtdacGjeXssauSxeLUE3gEVZrIIneBkN/IiSAAeqwPyJLKC','socio'),(171,'Federico','Frontera','12353432','ffronterakhjg@live.com','$2a$08$bQo6EP2PiAKOZhDwrwaFnuhieHszaOAD9/ZymmEO/z3K2Kj774mOO','socio'),(172,'Federico','Frontera','3515917873','ffronteradbdfsgd@live.com','$2a$08$QegfReFa7Czh/6wZT26Sa.7XIcKRfy52kKq.IpxjHO6Q2.N47zFIi','socio'),(173,'Federico','Frontera','3515917873','ffronteravbcnbnvb@live.com','$2a$08$KA6BVsZa5B8QNP5DHqVJdeIykvRck/bdWAmnR0EJaa1Q/x7FX25MO','socio');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-30 15:16:01
