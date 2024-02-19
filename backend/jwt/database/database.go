package database

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Video struct {
	gorm.Model
	Id   string `json:"id"`
	Link string `json:"link"`
	Title    string  `json:"title"`
	Like     uint32  `json:"like"`
	Disslike uint32  `json:"disslike"`
	Time     float32 `json:"time"`
	Views    uint32  `json:"views"`
}

type User struct {
	gorm.Model
	Video
	ID       int    `gorm:"primaryKey"`
	Email    string `json:"email" binding:"required" gorm:"unique"`
	Password string `json:"password" binding:"required"`
}

/*  Глобальная переменная для работы с базой данных */
var GlobalDB *gorm.DB

/* Функция для подключения базы данных */
func InitDatabase() (err error) {
	localhost := "localhost"
	db := "db"
	user := "user"
	pass := "pass"
	dsn := fmt.Sprintf("host=%s  user=%s dbname=%s password=%s sslmode=disable",
		localhost,
		user,
		db,
		pass,
	)
	GlobalDB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return err
	}
	GlobalDB.AutoMigrate(&User{},&Video{})
	if err != nil {
		log.Fatal("Error connecting to the database...", err)
	}
	fmt.Println("Database connection successful...")
	return
}
