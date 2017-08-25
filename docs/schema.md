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

## tables
|    Column          |   Data Type   |    Details               |
| -------------      | ------------- | -------------            |
| id                 | integer       | not null, primary key    |
| time               | time          | not null                 |
| seats              | integer       | not null                 |
| restaurant_id      | string        | not null, indexed        |

## reservations
|    Column          |   Data Type   |    Details               |
| -------------      | ------------- | -------------            |
| id                 | integer       | not null, primary key    |
| date               | date          | not null                 |
| user_id            | integer       | not null, indexed        |
| table_id           | integer       | not null, indexed        |

## restaurants
|    Column          |   Data Type   |    Details               |
| -------------      | ------------- | -------------            |
| id                 | integer       | not null, primary key    |
| name               | string        | not null                 |
| about              | text          | not null                 |
| hours              | string        | not null                 |
| phone_number       | string        | not null                 |
| website_url        | string        | not null                 |

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
