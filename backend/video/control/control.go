package control

import (
	"errors"
	st "sklad/jwt/database"

	"github.com/google/uuid"
)

func CreateVideo(link, Title string, Time float32,Like,Disslike,View uint32) (st.Video, error) {

	id := uuid.New().String()

	data := st.Video{
		Id:    id,
		Link:  link,
		Title: Title,
		Time:  Time,
		Like: Like,
		Disslike: Disslike,
		Views: View,
	}

	res := st.GlobalDB.Create(&data)
	if res.RowsAffected == 0 {
		return st.Video{}, errors.New("получение ссылки что то ебануло")
	}

	return st.Video{}, nil

}

func UpdateVideo(Like,Disslike,View uint32,Title string,id uint32)(st.Video, error) {
	var video st.User
	

	res := st.GlobalDB.Model(&video).Where("id = ?", id).Updates(st.Video{Title: Title, Like: Like,Disslike: Disslike, Views: View})
	if res.RowsAffected == 0 {
		return st.Video{}, errors.New("получение ссылки что то ебануло")
	}

	return st.Video{
		Id: video.Id,
		Title: video.Title,
		Like: video.Like,
		Disslike: video.Disslike,
		Views: video.Views,
	}, nil

}

func GetVideo(link string) (st.Video, error) {
	var video st.Video
	res := st.GlobalDB.Find(&video, "id = ?", link)
	if res.RowsAffected == 0 {
		return video, errors.New("video not found")
	}
	return st.Video{
		Title: video.Title,
		Like: video.Like,
		Disslike: video.Disslike,
		},
	 nil
}

func GetVideos() ([]*st.Video, error) {
	video := []*st.Video{}
	res := st.GlobalDB.Find(&video)
	if res.RowsAffected == 0 {
		return video, errors.New("no videos")
	}
	return video, nil
}