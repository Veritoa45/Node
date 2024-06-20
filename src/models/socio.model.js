const Socio = {
  tableName: "socio",
  fields: {
    CodSocio: {
      type: "int(11)",
      primaryKey: true,
      notnull: true,
    },
    Dni: {
      type: "varchar(10)",
      notNull: false,
    },
    Nombre: {
      type: "varchar(60)",
      notNull: false,
    },
    Apellido: {
      type: "varchar(60)",
      notNull: false,
    },
    Direccion: {
      type: "varchar(50)",
      notNull: false,
    },
    Tel: {
      type: "varchar(15)",
      notNull: false,
    },
    Mail: {
      type: "varchar(80)",
      notNull: true,
      unique: true,
    },
    Password: {
      type: "varchar(45)",
      notNull: true,
    },
  },
};

export default Socio;
