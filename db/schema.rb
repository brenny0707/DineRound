# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170826192551) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reservations", force: :cascade do |t|
    t.date     "date",       null: false
    t.integer  "user_id",    null: false
    t.integer  "table_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["date", "table_id"], name: "index_reservations_on_date_and_table_id", unique: true, using: :btree
    t.index ["table_id"], name: "index_reservations_on_table_id", using: :btree
    t.index ["user_id"], name: "index_reservations_on_user_id", using: :btree
  end

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",         null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "address",      null: false
    t.text     "about",        null: false
    t.string   "hours",        null: false
    t.string   "phone_number", null: false
    t.string   "website_url",  null: false
  end

  create_table "tables", force: :cascade do |t|
    t.integer  "restaurant_id", null: false
    t.integer  "seats",         null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.time     "time",          null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.string   "email_address",   null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email_address"], name: "index_users_on_email_address", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
