package main

import (
	"fmt"
	"log"
	"sklad/jwt/controllers"
	"sklad/jwt/database"
	"sklad/jwt/middleware"
	"sklad/video/control"
	"strconv"

	"github.com/gin-gonic/gin"
)

func handlerFunc() *gin.Engine {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Welcome To This Website")
	})
	r.POST("/CreateVideo", CrVd)
	r.GET("/Getvideo:id",func(ctx *gin.Context) {
		id := ctx.Param("id")
		vid,err := control.GetVideo(id)
		if err != nil {
			return
		}
		 ctx.JSON(200, gin.H{
			"message": "Данные получены",
			"data":    vid,
		})

	})
	r.GET("/Get",func(ctx *gin.Context) {
		vid,err := control.GetVideos()
		if err != nil {
			return
		}
		ctx.JSON(200, gin.H{
			"message": "Данные получены",
			"data":    vid,
		})
	})
	// Create a new group for the API
	api := r.Group("/api")
	{
		// Create a new group for the public routes
		public := api.Group("/public")
		{
			// Add the login route
			public.POST("/login", controllers.Login)
			// Add the signup route
			public.POST("/signup", func(ctx *gin.Context) {
				err := controllers.Signup(ctx)
				if err != nil {
					ctx.JSON(200, gin.H{
						"Message": "Sucessfully Register",
					})
				}
			})
		}
		// Add the signup route
		protected := api.Group("/protected").Use(middleware.AuthZ())
		{
			// Add the profile route
			protected.GET("/profile", controllers.Profile)
		}
	}
	return r
}

func main() {
	err := database.InitDatabase()
	if err != nil {
		log.Fatal(err)
	}
	router := handlerFunc()
	router.Run("localhost:3001")
}

func CrVd(ctx *gin.Context){
	data := ctx.PostForm("like")
		data1 := ctx.PostForm("title")
		data2 := ctx.PostForm("disslike")
		data3 := ctx.PostForm("link")
		data4 := ctx.PostForm("views")
		data5 := ctx.PostForm("time")
		value, _ := strconv.ParseFloat(data5, 32)
		time := float32(value)
		value2, _ := strconv.Atoi(data)
		value3, _ := strconv.Atoi(data2)
		value4, _ := strconv.Atoi(data4)
		vid,err := control.CreateVideo(data3, data1, time, uint32(value2), uint32(value3), uint32(value4))
		if err != nil {
			ctx.JSON(404, gin.H{
				"message": err,
			})

		}
		fmt.Println(&vid)
		ctx.JSON(200, gin.H{
			"message": "Данные получены",
			"data":    vid,
		})
}


