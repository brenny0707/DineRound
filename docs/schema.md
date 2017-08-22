# Schema Information

## users
|    Column          |   Data Type   |    Details               |
| -------------      | ------------- | -------------            |
| id                 | integer       | not null, primary key    |
| fname              | string        | not null                 |
| lname              | string        | not null                 |
| email              | string        | not null, indexed, unique|
| password_digest    | string        | not null                 |
| session_token      | string        | not null, indexed, unique|


## restaurants
|    Column          |   Data Type   |    Details               |
| -------------      | ------------- | -------------            |
| id                 | integer       | not null, primary key    |
| name               | string        | not null                 |


## reviews
|    Column          |   Data Type   |    Details               |
| -------------      | ------------- | -------------            |
| id                 | integer       | not null, primary key    |
| title              | string        | not null                 |
| body               | string        | not null                 |
| user_id            | string        | not null, indexed        |
| restaurant_id      | string        | not null, indexed        |

## favorites
|    Column          |   Data Type   |    Details               |
| -------------      | ------------- | -------------            |
| id                 | integer       | not null, primary key    |
| user_id            | string        | not null, indexed        |
| restaurant_id      | string        | not null, indexed        |
