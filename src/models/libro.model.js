const Libro = {
  tableName: "libro",
  fields: {
    CodLibro: {
      type: "int(11)",
      primaryKey: true,
      notnull: true,
    },
    Titulo: {
      type: "varchar(90)",
      notNull: false,
    },
    ISBN: {
      type: "varchar(15)",
      notNull: false,
    },
    Editorial: {
      type: "varchar(20)",
      notNull: false,
    },
    AEscritura: {
      type: "date",
      notNull: false,
    },
    AEdicion: {
      type: "date",
      notNull: false,
    },
    Tapa: {
      type: "varchar(150)",
      notNull: false,
    },
  },
};

export default Libro;
