-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2022 at 12:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobbyo`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_job`
--

CREATE TABLE `add_job` (
  `jb_ttl` varchar(200) NOT NULL,
  `m_qual` varchar(50) NOT NULL,
  `s_range` varchar(10) NOT NULL,
  `jbdes` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `add_job`
--

INSERT INTO `add_job` (`jb_ttl`, `m_qual`, `s_range`, `jbdes`) VALUES
('Web Devoloper', '3', '50000', 'Full time Work'),
('software', '4', '565269', 'igyyqwdhb'),
('Amrendra', '3', '45985', 'deuidhed');

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `adid` varchar(50) NOT NULL,
  `passwd` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`adid`, `passwd`) VALUES
('bahubali1602@gmail.com', 'amrendra');

-- --------------------------------------------------------

--
-- Table structure for table `applyjob`
--

CREATE TABLE `applyjob` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `jbttl` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mob` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applyjob`
--

INSERT INTO `applyjob` (`id`, `name`, `jbttl`, `email`, `mob`) VALUES
(1, 'Amrendra Chaudhary', 'Web Devoloper', 'chaudharyamrendra1603@gmail.com', '08881084485'),
(2, 'golu', 'software', 'golu@gmail.com', '595965');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `f_name` varchar(20) NOT NULL,
  `l_name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `mob` varchar(20) DEFAULT NULL,
  `msg` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`f_name`, `l_name`, `email`, `mob`, `msg`) VALUES
('Amrendra', 'Chaudhary', 'chaudharyamrendra160', '623652', 'wqdqd'),
('Amrendra', 'Chaudhary', 'chuadharyamrendra160', '1235456', 'wsygudqwd'),
('Amrendra', 'Chaudhary', 'chaudharyamrendra160', '595656', 'ytetw'),
('wqeret', 'weqrt', 'chaudharyamrendra160', '5415418548548', 'gyuqfodyqiedq'),
('gsqwujdhqk', 'yugdwhasx', 'chaudharyamrendra160', '41856489656865', '67teydwghsj'),
('Amrendra', 'Chaudhary', 'chaudharyamrendra160', '596541265431', 'yguwfdqasdv'),
('gvshbjn', 'cfh', 'chaudharyamrendra160', '3456738940', 'dtrfsghdj');

-- --------------------------------------------------------

--
-- Table structure for table `ragistration`
--

CREATE TABLE `ragistration` (
  `f_name` varchar(50) DEFAULT NULL,
  `l_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `c_no` varchar(15) DEFAULT NULL,
  `strt` varchar(100) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `qual` varchar(100) NOT NULL,
  `gnd` varchar(100) NOT NULL,
  `chs_pwd` varchar(20) NOT NULL,
  `rescv` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ragistration`
--

INSERT INTO `ragistration` (`f_name`, `l_name`, `email`, `c_no`, `strt`, `city`, `state`, `qual`, `gnd`, `chs_pwd`, `rescv`) VALUES
('bahubali', 'Chaudhary', 'bahubali1602@gmail.com', '296596', 'Barwa Bazar sekhwaniya Kasia kushinagar', 'Kushinagar', 'UP', '2', 'on', 'hjgsda', 'DSC_0331.JPG'),
('Amrendra', 'Chaudhary', 'chaudharyamre1602@gmail.com', '46454312', 'Barwa Bazar sekhwaniya Kasia kushinagar', 'Kushinagar', 'UP', '2', 'on', 'wuiegydwjd', 'DSC_0325.JPG'),
('Amrendra', 'Chaudhary', 'chaudharyamrendra1602@gmail.com', '98518541541', 'Barwa Bazar sekhwaniya Kasia kushinagar', 'Kushinagar', 'UP', '2', 'on', '88888', 'DSC_0451.JPG'),
('Amrendra', 'Chaudhary', 'chaudharyamrendra1603@gmail.com', '5555555555', 'Barwa Bazar sekhwaniya Kasia kushinagar', 'Kushinagar', 'UP', '2', 'on', 'wyu', 'DSC_0324.JPG'),
('Amrendra', 'Chaudhary', 'chuadharyamrendra1600@gmail.com', '657884', 'Barwa Bazar', 'Kushinagar', 'Uttar Pradesh', '3', 'on', 'gfty', 'DSC_0325.JPG'),
('golu', 'chaudhary', 'golu@gmail.com', '98595', 'wuidhuwq', 'ipjwjdipqw', 'iuuqdww', '2', 'on', 'iojqw', 'DSC_0410.JPG'),
('bhjjhfjk', 'bhjdjk', 'sh@gmail.com', '6756767678', 'dfeg', 'fergtyhju', 'rtyh', '1', 'on', 'fgtrbh', 'DSC_0326.JPG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`adid`);

--
-- Indexes for table `applyjob`
--
ALTER TABLE `applyjob`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ragistration`
--
ALTER TABLE `ragistration`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applyjob`
--
ALTER TABLE `applyjob`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
