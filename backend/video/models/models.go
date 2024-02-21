package models

import "gorm.io/gorm"



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