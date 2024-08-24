## Nextjs was introduced to solve some minr inconveinence in React 

1 In react project you have to maintain separeate backend project for tou api routes 
2 react does provide out of the box routing (must use react-router-dom)
3 React is not seo optimized 
 

## SEO Optimized ? how google does it
- google has crauler roaming all around the web , it gets cdn and finds out html css js , and hence the actual reference of the website 
- what if the crauler don't findout the initial html , js 

### React doesn't give you all content in initial render , crauler doesn't have initial access to all contents 
- react isn't seo optimized ,


# Waterfalling problem 
- suppose a blog app , you make a request to particular link , first blogs html renders, is js it renders , js has reference to API server , 
- It takes a good chunk of time , so slow 

Wouldn't it be right in a single html request we get all my blogs ? 


### NextJs offerings 
1 Server side rendering 
2 AP routes , (no need of seperate express app )
3 File based routing 
4 Bundle site optimisation , static site generation 
5 Maintained by vercel team !!! 


# Ddownsides 
- Cannot be distributed via cdn , always needs a server side redndering and hence is expensive 
- very optionated , very hard to move out of it 