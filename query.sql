USE gmm_apis;

CREATE TABLE User_Registeration(
user_id INT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
user_pic VARCHAR(200) NOT NULL,
aadhar_image VARCHAR(200) NOT NULL,
pan_image VARCHAR(200) NOT NULL,
email VARCHAR(100) ,
phone_no VARCHAR(10) NOT NULL,
username VARCHAR(100) NOT NULL,
password VARCHAR(50) NOT NULL,
bank_name VARCHAR(200) NOT NULL,
bank_acc_no VARCHAR(20) NOT NULL,
bank_ifsc VARCHAR(11) NOT NULL,
bank_acc_holder_name VARCHAR(200) NOT NULL,
reference VARCHAR(200),
is_block BOOLEAN DEFAULT FALSE,
is_resign BOOLEAN DEFAULT FALSE
);

select * from User_Registeration;

