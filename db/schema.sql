Create DATABASE burgers_db;
use burgers_db;

Create TABLE burgers (
  id int not null auto_increment,
  burger_name varchar(50) not null,
  devoured boolean not NULL,
  primary key(id)
)