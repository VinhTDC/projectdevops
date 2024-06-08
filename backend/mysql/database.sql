
CREATE TABLE product (
 id INT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 description TEXT NOT NULL,
 price INT NOT NULL,
 image VARCHAR(255) NOT NULL
);

CREATE TABLE banner (
 id INT PRIMARY KEY,
 title VARCHAR(255) NOT NULL,
 description TEXT NOT NULL,
 image VARCHAR(255) NOT NULL
);

CREATE TABLE customer (
 id INT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 description TEXT NOT NULL,
 image VARCHAR(255) NOT NULL
);

INSERT INTO banner VALUES 
(1, 'Makeup', 'incididunt ut labore et dolore magna aliqua. Ut enim', 'banner-img.png'),
(2, 'Makeup', 'incididunt ut labore et dolore magna aliqua. Ut enim', 'img-1.png'),
(3, 'Makeup', 'incididunt ut labore et dolore magna aliqua. Ut enim', 'img-2.png'),
(4, 'Makeup', 'incididunt ut labore et dolore magna aliqua. Ut enim', 'img-2.png');

INSERT INTO customer VALUES 
(1, 'Jonyro', 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation eu', 'client-img.png'),
(2, 'Jonyro', 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation eu', 'client-img.png'),
(3, 'Jonyro', 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation eu', 'client-img.png');


INSERT INTO product VALUES
    (1, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-1.png'),
    (2, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-2.png'),
    (3, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-3.png'),
    (4, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-4.png'),
    (5, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-5.png'),
    (6, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-6.png'),
    (7, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-7.png'),
    (8, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-8.png'),
    (9, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-9.png'),
    (10, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-10.png'),
    (11, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-11.png'),
    (12, 'Beauty Bursh', 'incididunt ut labore et dolore magna aliqua. Ut enim', 30, 'img-12.png');
