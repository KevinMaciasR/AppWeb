module.exports = {
    database: {
        host: 'localhost',
        user: 'Grupo9',
        password: 'contrasena123',
        database: 'proyecto'
    }
};


/*
CREATE USER 'Grupo9'@'localhost' IDENTIFIED VIA mysql_native_password USING '***';
GRANT ALL PRIVILEGES ON *.* TO 'Grupo9'@'localhost' REQUIRE NONE WITH GRANT OPTION MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON `proyecto`.* TO 'Grupo9'@'localhost';
*/