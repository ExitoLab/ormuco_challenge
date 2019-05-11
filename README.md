### Description

This application was developed with Python programming language using the Flask Framework and PostgreSQL database was implemented. The application is dockerize and running on aws.

The database was deployed using persistent volume, this means that if the docker container go missing or deleted it will not affect the data. The data can be mounted on a the host machine.

Ansible configuration tools was used in deploying the application to aws. All the codes used in executing this challenge are all in the github folder.


### Description of the database

1. PostgreSQL was used for this project
2. The name database for this project is `ormuco_challenge`
3. There are one table `pets`