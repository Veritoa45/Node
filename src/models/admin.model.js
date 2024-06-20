const Admin = {
  tableName: "admin",
  fields: {
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

export default Admin;
