<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Chat App</title>
  <link rel="stylesheet" href="{{asset('css/bootstrap.css')}}">
</head>

<body>
  <div class="body-container">
    <section class="chat-module">
      <div class="chat-header">
        <div class="header-left">
          <span class="online">ONLINE: </span>
          <span class="number">196</span>
        </div>
        <div class="header-right">
          RULES & COMMANDS
        </div>
      </div>
      <div class="tab-one">
        <ul class="conversations-list">
          <li class="conversation">
            <div class="avatar">
              <img src="img/others1.jpg" alt="" class="user-img">
              <div class="user-level">2</div>
            </div>
            <div class="message">
              <time class="timeago" datetime="2018-11-20T22:24:17"></time>
              <div class="user-name">
                catwalker
              </div>
              <div class="text">
                Hello guys! I am back
              </div>
            </div>
          </li>
          <li class="conversation">
            <div class="avatar">
              <img src="img/self.jpg" alt="" class="user-img">
              <div class="user-level">2</div>
            </div>
            <div class="message">
              <time class="timeago" datetime="2018-11-20T21:20:17"></time>
              <div class="user-name">
                catwalker
              </div>
              <div class="text">
                Hello guys! I am back
              </div>
            </div>
          </li>
        </ul>
        <div class="chat-box">
          <input type="text" class="form-control chat-input">
          <button class="send-btn">SEND</button>
        </div>
      </div>
      <div class="tab-two">

      </div>
    </section>
  </div>

</body>

</html>