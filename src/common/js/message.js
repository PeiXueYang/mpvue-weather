export  const  messages = () => {
    let hour = new Date().getHours()
    switch(hour) {
      case 6:
        return '揉揉惺忪的睡眼，还可以在眯一会儿'
      case 7:
        return '七点了，是要起床了吗?'
      case 8:
        return '起床了吧，上班要迟到了.'
      case 9:
        return '早上好，这么早就醒了，住的离公司远了吧'
      case 10:
       return '据说每天十点,是注意力最集中的时刻哦.'
      case 11:
        return '再坚持一会儿,可以吃午饭了~'
      case 12:
        return '午饭时间到了，该吃些什么好呢?兄dei'
      case 13:
        return '中午好，如果工作太忙，那就不要吃饭了'
      case 14:
        return '午睡好了吧，可以工作了.'
      case 15:
        return '偷偷告诉了，累了记得休息会哦'
      case 16:
        return '下午过半了,再坚持会就可以见到TA了.'
      case 17:
        return '下午好，长时间敲代码，能让你的腰间盘更加突出噢'
      case 18:
        return '下班了，收拾收拾回家啦.'
      case 19:
        return '还没下班？不要担心，以后这样的日子还多得是呢'
      case 20:
        return '还没搞定吗，新的PRE已经发来了.'
      case 21:
        return '晚上好，赶不上末班车？那就在公司加班到天明吧'
      case 22:
        return '这么晚回去，一定要注意安全哦~'
      case 23:
        return '问我见过晚上十一二点的月亮没？没有，我都是凌晨一两点下班'
      case 0:
      case 1:
      case 2:
      case 3:
        return '这个点儿了还在看手机？没有妹子就是好啊'
      case 4:
      case 5:
        return '对不起，我实在是编不下去了...'
    }
  }
