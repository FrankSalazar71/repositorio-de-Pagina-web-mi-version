DROP DATABASE IF EXISTS libroReclamos;
CREATE DATABASE libroReclamos 
DEFAULT CHARACTER SET utf8;

USE libroReclamos;


CREATE TABLE RECLAMOS
(
    id int,
    fecha_presentacion datetime,
    nombre_demandante varchar(60),
    apellido_demandante varchar(60),
    motivo varchar(300),
    descripcion varchar(350),
    estado varchar(50),
    observaciones varchar(300),
    CONSTRAINT reclamos_pk PRIMARY KEY (id)
);

CREATE TABLE RESPUESTAS
(
    id int,
    fecha_atencion timestamp,
    nombre_respondiente varchar(60),
    tipo_respondiente varchar(60),
    descripcion_respuesta varchar(300),
    reclamos_id int,
    CONSTRAINT respuestas_pk PRIMARY KEY (id)

);

ALTER TABLE RESPUESTAS
	ADD FOREIGN KEY (reclamos_id)
    REFERENCES RECLAMOS (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;
    
SELECT 
    i.constraint_name, k.table_name, k.column_name, 
    k.referenced_table_name, k.referenced_column_name
FROM 
    information_schema.TABLE_CONSTRAINTS i 
LEFT JOIN information_schema.KEY_COLUMN_USAGE k 
ON i.CONSTRAINT_NAME = k.CONSTRAINT_NAME 
WHERE i.CONSTRAINT_TYPE = 'FOREIGN KEY' 
AND i.TABLE_SCHEMA = DATABASE();


-- Restricciones de unicidad
ALTER TABLE RECLAMOS
ADD CONSTRAINT reclamos_nombre_demandante_unq UNIQUE (nombre_demandante, apellido_demandante);

-- Restricciones de not null
ALTER TABLE RECLAMOS
MODIFY id INT NOT NULL,
MODIFY fecha_presentacion DATETIME NOT NULL,
MODIFY nombre_demandante VARCHAR(60) NOT NULL,
MODIFY apellido_demandante VARCHAR(60) NOT NULL,
MODIFY motivo VARCHAR(300) NOT NULL,
MODIFY descripcion VARCHAR(350) NOT NULL,
MODIFY estado VARCHAR(50) NOT NULL,
MODIFY observaciones VARCHAR(300) NOT NULL;

ALTER TABLE RESPUESTAS
MODIFY id INT NOT NULL,
MODIFY fecha_atencion TIMESTAMP NOT NULL,
MODIFY nombre_respondiente VARCHAR(60) NOT NULL,
MODIFY tipo_respondiente VARCHAR(60) NOT NULL,
MODIFY descripcion_respuesta VARCHAR(300) NOT NULL,
MODIFY reclamos_id INT NOT NULL;

-- Restricciones de check
ALTER TABLE RECLAMOS
ADD CONSTRAINT reclamos_estado_check CHECK (estado IN ('Pendiente', 'En Proceso', 'Resuelto'));


-- Inserciones de registros
INSERT INTO RECLAMOS (id, fecha_presentacion, nombre_demandante, apellido_demandante, motivo, descripcion, estado, observaciones) VALUES
(1, '2023-10-01', 'Juan', 'Perez', 'Fallo de servicio', 'El servicio no funcionó como se esperaba', 'Pendiente', ''),
(2, '2023-10-02', 'Maria', 'Gomez', 'Facturación incorrecta', 'La factura no coincide con el servicio recibido', 'Pendiente', ''),
(3, '2023-10-03', 'Carlos', 'Rodriguez', 'Producto defectuoso', 'El producto recibido no funciona correctamente', 'Pendiente', ''),
(4, '2023-10-04', 'Ana', 'Martinez', 'Publicidad engañosa', 'El producto no cumple con las características anunciadas', 'Pendiente', ''),
(5, '2023-10-05', 'Pedro', 'Lopez', 'Servicio no prestado', 'Pagué por un servicio que no se prestó', 'Pendiente', ''),
(6, '2023-10-06', 'Laura', 'Diaz', 'Cobro indebido', 'Me cobraron un monto superior al acordado', 'Pendiente', ''),
(7, '2023-10-07', 'Juan', 'Garcia', 'Producto dañado', 'El producto llegó dañado', 'Pendiente', ''),
(8, '2023-10-08', 'Sofia', 'Torres', 'Entrega tardía', 'El producto llegó después del plazo acordado', 'Pendiente', ''),
(9, '2023-10-09', 'Fernando', 'Gutierrez', 'Producto incompleto', 'El producto llegó incompleto', 'Pendiente', ''),
(10, '2023-10-10', 'Andrea', 'Ramirez', 'Servicio de mala calidad', 'El servicio prestado no cumplió con mis expectativas', 'Pendiente', '');

-- Ejemplos de update
UPDATE RECLAMOS SET estado='Resuelto' WHERE id=1;
UPDATE RECLAMOS SET observaciones='En revisión' WHERE id=2;
UPDATE RECLAMOS SET estado='En Proceso' WHERE id=3;
UPDATE RECLAMOS SET observaciones='Se solicitaron pruebas adicionales' WHERE id=4;
UPDATE RECLAMOS SET estado='Resuelto' WHERE id=5;

-- Ejemplos de listar
SELECT * FROM RECLAMOS;
SELECT * FROM RECLAMOS WHERE estado='Pendiente';
SELECT * FROM RECLAMOS WHERE nombre_demandante='Juan';
SELECT * FROM RECLAMOS WHERE fecha_presentacion > '2023-10-05';
SELECT * FROM RECLAMOS WHERE motivo='Producto defectuoso';

-- Ejemplos de eliminar
DELETE FROM RECLAMOS WHERE id=1;
DELETE FROM RECLAMOS WHERE id=2;
DELETE FROM RECLAMOS WHERE id=3;
DELETE FROM RECLAMOS WHERE id=4;
DELETE FROM RECLAMOS WHERE id=5;



CREATE TABLE fechas_civicas (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  NOMBRE VARCHAR(69),
  FECHA DATE,
  DESCRIP VARCHAR(255)
);


INSERT INTO fechas_civicas (NOMBRE, FECHA, DESCRIP) VALUES
('AGREGACION DEL CALENDARIO','2023-11-07', 'revision , ejemplo');


SELECT * FROM fechas_civicas WHERE FECHA = CURDATE();



