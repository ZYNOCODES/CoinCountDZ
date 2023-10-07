-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2023 at 05:34 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `streamdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `agentsagrees`
--

CREATE TABLE `agentsagrees` (
  `id` bigint(20) NOT NULL,
  `Nom` varchar(255) DEFAULT NULL,
  `Prenom` varchar(255) DEFAULT NULL,
  `Region` varchar(255) DEFAULT NULL,
  `Telephone` varchar(255) DEFAULT NULL,
  `Adresse` varchar(255) DEFAULT NULL,
  `Localisation` varchar(255) DEFAULT NULL,
  `Local` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pannes`
--

CREATE TABLE `pannes` (
  `id` bigint(20) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Telephone` varchar(255) NOT NULL,
  `ReferanceProduit` varchar(255) NOT NULL,
  `TypePanne` varchar(255) NOT NULL,
  `Wilaya` varchar(255) NOT NULL,
  `CentreDepot` varchar(255) NOT NULL,
  `DateDepot` datetime NOT NULL,
  `FinReparation` datetime DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Progres` int(11) DEFAULT 0,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `ReferanceProduit` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `savs`
--

CREATE TABLE `savs` (
  `id` bigint(20) NOT NULL,
  `Region` varchar(255) DEFAULT NULL,
  `Telephone` varchar(255) DEFAULT NULL,
  `Localisation` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `statistics`
--

CREATE TABLE `statistics` (
  `id` bigint(20) NOT NULL,
  `NbTicketsOuverts` bigint(20) NOT NULL,
  `ProduitEnAttente` bigint(20) NOT NULL,
  `ProduitDeposes` bigint(20) DEFAULT NULL,
  `ProduitRepares` bigint(20) DEFAULT NULL,
  `ProduitEnReparation` bigint(20) DEFAULT NULL,
  `EnAttenteDePickup` bigint(20) DEFAULT NULL,
  `Produitlivre` bigint(20) DEFAULT NULL,
  `DelaiMoyenReparation` time DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `statisticscentres`
--

CREATE TABLE `statisticscentres` (
  `id` bigint(20) NOT NULL,
  `Centre` varchar(255) NOT NULL,
  `NbTicketsOuverts` bigint(20) NOT NULL,
  `ProduitEnAttente` bigint(20) NOT NULL,
  `ProduitDeposes` bigint(20) DEFAULT NULL,
  `ProduitRepares` bigint(20) DEFAULT NULL,
  `ProduitEnReparation` bigint(20) DEFAULT NULL,
  `EnAttenteDePickup` bigint(20) DEFAULT NULL,
  `Produitlivre` bigint(20) DEFAULT NULL,
  `DelaiMoyenReparation` time DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wilayaofalgeria`
--

CREATE TABLE `wilayaofalgeria` (
  `id` int(11) NOT NULL,
  `code` int(11) DEFAULT NULL,
  `Nom` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agentsagrees`
--
ALTER TABLE `agentsagrees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pannes`
--
ALTER TABLE `pannes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `savs`
--
ALTER TABLE `savs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statisticscentres`
--
ALTER TABLE `statisticscentres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wilayaofalgeria`
--
ALTER TABLE `wilayaofalgeria`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agentsagrees`
--
ALTER TABLE `agentsagrees`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pannes`
--
ALTER TABLE `pannes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `savs`
--
ALTER TABLE `savs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `statistics`
--
ALTER TABLE `statistics`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `statisticscentres`
--
ALTER TABLE `statisticscentres`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wilayaofalgeria`
--
ALTER TABLE `wilayaofalgeria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
