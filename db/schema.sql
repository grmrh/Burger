Create DATABASE burgers_db;
use burgers_db;

Create TABLE burgers (
  id int not null auto_increment,
  burger_name varchar(255) not null,
  devoured boolean not NULL,
  created_at TIMESTAMP not null default CURRENT_TIMESTAMP,
  primary key(id)
)