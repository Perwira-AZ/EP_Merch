<h1 align="center"> ♠️TeamUp </h1>
<p align="center">
<img src="https://media.tenor.com/02ILjyFVXWQAAAAC/handshake.gif" width="100%" height="100%">
</p>

## 📌About TeamUp
TeamUp is a Web based application that can help users to create and find a great team for joining competitions. <br>
[Click here](https://team-up-paw.vercel.app/) to experience the ease of teaming up.

## 👩‍💻Meet Our Team
1. Mochammad Novaldy Pratama Hakim (20/463606/TK/51598)
2. Angelica Callysta Viera (21/474719/TK/52377)
3. Rajendra Damar Setiyawan (21/476932/TK/52525)
4. Perwira Akhdan Zumarsyah (21/479386/TK/52881)
5. Gifto Ramadha (21/480271/TK/52996)

## 🎓Deliverables
### 🥈Pra-UTS
[Presentation Video](https://youtu.be/pWndVrUmbUM) <br>
[Presentation Slide](https://www.canva.com/design/DAFvjNEOXbw/w4OOE8crnTyhCfgRLK9CeQ/edit)

### 🥇Post-UTS 
[Web Application link in Vercel](https://team-up-paw.vercel.app/) <br>
[Presentation Video](https://youtu.be/pWndVrUmbUM) <br>
[Presentation Slide](https://www.canva.com/design/DAFvjNEOXbw/w4OOE8crnTyhCfgRLK9CeQ/edit) <br>
[Postman Documentation](https://youtu.be/pWndVrUmbUM) <br>

## 📘Use Case Diagram
![paw-teamup-use-case drawio](https://github.com/Perwira-AZ/TeamUP/assets/92919810/dd6cbca3-e98d-40dd-b832-61ea39253f55)

## 📘Entity Relation Diagram
![paw-teamup-erd drawio](https://github.com/Perwira-AZ/TeamUP/assets/92919810/f30e5029-0ba0-4caa-8b03-25cacd2250ac)


## ☑️Features and Endpoints
### 👱‍♀️User

#### 1. Register New User

```
  POST /api/user/register
```

| Parameter | Type     |
| :-------- | :------- |
| `name` | `string` | 
| `userName` | `string`|
| `userEmail` | `string`|
| `password` | `string`|

#### 2. Login

```
  POST /api/user/login
```

| Parameter | Type     |
| :-------- | :------- |
| `userEmail` | `string` |
| `password` | `string` |

#### 3. Get user info

```
  GET /api/user/${userId}
```

| Parameter | Type     |
| :-------- | :------- |
| `userId` | `ObjectId` |

#### 4. Update user info

```
  PATCH /api/user/${userId}
```

| Parameter | Type     |
| :-------- | :------- |
| `userId` | `ObjectId` |
| `name` | `string` | 
| `userName` | `string` |
| `userEmail` | `string` |
| `password` | `string` |


### ⛹️Teams 

#### 1. Search teams

```
  GET /api/teams
```

| Parameter | Type     |
| :-------- | :------- |
| `teamName` | `string` | 
| `teamLocation.province` | `string` |
| `teamLocation.city` | `string` |
| `teamCompetition` | `string` |

#### 2. Get team detail

```
  GET /api/teams/teamDetail/${teamId}
```

| Parameter | Type     |
| :-------- | :------- |
| `teamId` | `ObjectId` |

#### 3. Get owned team

```
  GET /api/teams/myTeams
```

| Parameter | Type     |
| :-------- | :------- |
| `userId` | `ObjectId` |

#### 4. Create new team

```
  POST /api/teams
```

| Parameter | Type     |
| :-------- | :------- |
| `teamName` | `string` |
| `teamLeader` | `string` |
| `teamLocation.province` | `string` |
| `teamLocation.city` | `string` |
| `teamStart` | `date` |
| `teamEnd` | `date` |
| `teamCompetition` | `string` |
| `teamDescription` | `string` |
| `teamMember.position` | `string` |

#### 5. Delete team

```
  DELETE /api/teams/teamDetail/${teamId}
```

| Parameter | Type     |
| :-------- | :------- |
| `userId` | `ObjectId` |
| `teamId` | `ObjectId` |

#### 6. Make request to join team

```
  PATCH /api/teams/request/${positionId}
```

| Parameter | Type     |
| :-------- | :------- |
| `userId` | `ObjectId` |
| `positionId` | `ObjectId` |

#### 7. Accept request to join team

```
  PATCH /api/teams/accept/${requestId}
```

| Parameter | Type     |
| :-------- | :------- |
| `requestId` | `ObjectId` |

#### 8. Reject request to join team

```
  PATCH /api/teams/reject/${requestId}
```

| Parameter | Type     |
| :-------- | :------- |
| `requestId` | `ObjectId` |

## 💻Tech Stack
* MongoDB
* ExpressJS
* ReactJS
* NodeJS
* Figma
* TailwindCSS

## 🎨How to Run Front-end
1. Clone this repository 
```
  git clone https://github.com/Perwira-AZ/TeamUP.git
```
2. Go to front-end directory
```
  cd frontend
```
3. Install Packages
```
  npm install react-icons
```
4. Run App
```
  npm run dev
```

## 📂How to Run Back-end
1. Go to back-end directory
```
  cd backend
```
2. Install Packages
3. Run App
