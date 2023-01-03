import axios from 'axios'

const newsapi = axios.create({
	baseURL: 'https://newsapi.org/v2'
})

export const getTopStories = async ()=>{
	const { data } = await newsapi.get('/top-headlines?language=en&apiKey=14f43dc865744037893a18ed961af39e')
	return data
}

export const getIndia = async ()=>{
	const { data } = await newsapi.get('/top-headlines?country=in&language=en&apiKey=14f43dc865744037893a18ed961af39e')
	return data
}

export const getForYou = async ()=>{
	const { data } = await newsapi.get('/top-headlines?sources=bbc-news&apiKey=14f43dc865744037893a18ed961af39e')
	return data
}

export const getBusiness = async ()=>{
	const { data } = await newsapi.get('/top-headlines?category=business&language=en&apiKey=14f43dc865744037893a18ed961af39e')
	return data
}

export const getHealth = async ()=>{
	const { data } = await newsapi.get('/top-headlines?category=health&language=en&apiKey=14f43dc865744037893a18ed961af39e')
	return data
}

export const getEntertainment = async ()=>{
	const { data } = await newsapi.get('/top-headlines?category=entertainment&language=en&apiKey=14f43dc865744037893a18ed961af39e')
	return data
}

export const getScience = async ()=>{
	const { data } = await newsapi.get('/top-headlines?category=science&language=en&apiKey=14f43dc865744037893a18ed961af39e')
	return data
}

export const getSports = async ()=>{
	const { data } = await newsapi.get('/top-headlines?category=sports&language=en&apiKey=14f43dc865744037893a18ed961af39e')
	return data
}

export const getTechnology = async ()=>{
	const { data } = await newsapi.get('/top-headlines?category=technology&language=en&apiKey=14f43dc865744037893a18ed961af39e')
	return data
}