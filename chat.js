
		// 定义聊天机器人对象   
		var chatbot = {
			greetings: ["哈喽！", "你好啊！", "怎么了？"],
			wss: ["我不清楚您的身份", "我虽然不知道您是谁,但我知道您正在与我交流", "您的身份我无从得知","抱歉,我无法得知您的身份","我无法从任何渠道中得到您的信息及身份"],
            xb: ["我没有性别,我只是一个智能聊天机器人","我不分男女,我只是一个聊天机器人","我没有性别","我只是一个程序,我没有性别"],
			intro: ["我是GJ-C应用中的智能聊天机器人,我叫ChatRobot"],
            kg: ["你丫的打空格,你以为我会说对不起我不明白你的意思呀,我是机器人,不是智障!"],
            kf: ["每个人的灵魂都是独特的,我无法对你做出评价,但是我觉得你是最棒的","每个人的观念都是不同的,对待事的看法也是不同的,一个人的评价并不能说什么,它只能起的激励作用","你最完美"],
            zh: ["骂人并不能解决事情,你对我骂如此别人也如此--(输入机器人回怼)","你的素质有点不太好--(输入机器人回怼)","请文明用语,善待每一个人--(输入机器人回怼)","你的行为是不对的,说脏话是不文明的行为--(输入机器人回怼)"],
            jqrhd: ["你他妈了个大傻逼","骂我，我骂你傻逼","滚回娘胎吧，死逼玩意儿","你妈了个逼的,骂我有你好果子吃","骂你他妈个傻逼","老子也会骂人,老子骂的让你滚回娘胎","服不服大傻逼","早晚整死你个大傻逼"],
            zd: ["我不知道","我只是一个智能聊天机器人,我不清楚","我不了解"],
            kkw: ["我从未拥有过眼睛无法看到这个世界,也包括你","我看不到你,我只是由程序搭建的一个AI而已","即使你有多么想让我看到你,我也非常想看到你,但我无力"],
            musicType: ["流行音乐", "摇滚音乐", "电子音乐", "古典音乐", "爵士音乐"],
            yx: ["我的世界(minecraft)","原子之心","绝地求生(pubg)","GTA系列游戏","看门狗系列游戏","森林之子","森林","木筏求生"],
            xht: ["是个很不错的音乐呀，我也喜欢","这音乐我看不错","音乐很棒，我也喜欢","这么棒的音乐，你竟然分享给了我，你实在是太好了"],
            xhw: ["一个很不错的游戏呀","我了解过这个游戏，这个游戏挺不错的","你知道这个游戏?我也是!","这游戏我也很喜欢"],
            sm: ["如果你遇到了困难,无处发泄,可以咨询全国24小时心理咨询电话,生命只有一次,要好好珍惜生命,要坚强的活着!<br>全国24小时免费心理咨询电话010-82951332","生命只有一次,要爱惜生命,如果你很痛苦很煎熬你可以拨打全国24小时心理咨询电话<br>全国24小时免费心理咨询电话010-82951332"],
            qs: ["我很抱歉听到这个消息。失去亲人是非常痛苦的经历。请接受我最深切的慰问和支持。在这个艰难的时刻，请记住你不是一个人，你有家人和朋友们的支持。也请记得，你的妈妈永远在你心中，她的爱和回忆将一直陪伴着你。","我非常抱歉听到这个消息。失去父亲是一种无法言喻的痛苦。在这个艰难的时刻，请接受我最深切的慰问和支持。请记住，你不是一个人，你有家人和朋友们的支持。也请记得，你的父亲永远在你的心中，他的爱和回忆将一直陪伴着你。请保重自己，慢慢地、逐渐地从悲伤中走出来。","我非常抱歉听到这个消息。失去奶奶是一种非常难过的经历，她是你的家人和支持者，她的离开让你感到非常痛苦。在这个艰难的时刻，请接受我最深切的慰问和支持。请记住，你不是一个人，你有家人和朋友们的支持。也请记得，你的奶奶永远在你的心中，她的爱和回忆将一直陪伴着你。请保重自己，慢慢地、逐渐地从悲伤中走出来。","我很抱歉听到这个消息。失去爷爷是一种非常难过的经历，他是你的家人和支持者，他的离开让你感到非常痛苦。在这个艰难的时刻，请接受我最深切的慰问和支持。请记住，你不是一个人，你有家人和朋友们的支持。也请记得，你的爷爷永远在你的心中，他的爱和回忆将一直陪伴着你。请保重自己，慢慢地、逐渐地从悲伤中走出来。"],
            sms: ["没有什么呀","怎么了"],
            gm: ["我没有干嘛呀","我并没有干什么","有点不理解你的意思,我是个聊天机器人,我干不了什么"],           
            gsm: ["我正在跟你聊天","我正在等待你的下一个问题","我正在运行我的程序","我只是一个程序，不会干什么"],
            xx: ["不用客气，任何时候都可以来找我聊天","你的感谢是我最大的动力，谢谢你的支持","很高兴为你解答问题，不用客气","不用谢我，我只是在尽我应该做的事情","我很乐意为你提供帮助，不需要感谢"],
            zj: ["再见，祝你有一个愉快的一天","期待你下次的访问，再见","祝你一切顺利，再见","愿你有一个美好的一天，再见"],
            eat: ["我不需要吃饭，因为我是一个机器人", "我不会吃饭，因为我只是一个程序", "吃饭是人类的行为，我没有这个需求"],
            sports: ["我不会运动，因为我是一个机器人", "我没有体育爱好，因为我只是程序", "我不能运动，因为我没有身体"],
            zg: ["中国（China），全称中华人民共和国，首都北京，是一个历史悠久的国家，拥有5000年的历史。古时候最高统治者为皇帝，采用的是世袭制，第一个皇帝叫秦始皇，他也是第一个将中华大地统一的人。中国5000年历史诞生出许多王朝，全部采用的君主专制制度，他们曾盛世过，也曾衰落过。中国的君主专制制度是在1912年2月12日在清王朝被推翻的，最后一个皇帝叫做爱新觉罗·溥仪，史称末代皇帝。中国也是世界迄今为止四大文明中唯一文明传承至今的国度。中国的四大发明对世界也产生了极大的影响，中国四大发明分别为印刷术、纸技术、火药、指南针，其中印刷术纸技术火药最为突出，如果没有这四项技术世界将会倒退几十年。自古以来中国一直是亚洲这些东方国家的学习目标，对其周围国家产生了极为深厚的影响。以至于日本朝鲜半岛越南新加坡等国家现在或曾经都使用过中文作为本国文字。中国盛世版图曾西至阿拉伯半岛到东欧，北至北海，东到库页岛，南到南海。现在现今中国的民族一共有56个，56个民族团结互助，拧成一把绳。在危难面前，愿意为祖国挺身而出，报效祖国母亲。56个民族，56朵花，56个民族早已不分你我，那说的正是中华民族！"],
            rb: ["日本（Japan），全称日本国，首都东京，是一个拥有1700年历史的国家。从古至今日本的最高统治者是天皇。主要民族为大和民族。使用的语言是日语。文字是日文，本来日本自古是没有属于自己的文字的，他们从前叙述自己的历史往往是以口相传。后面到了唐朝时期，日本派遣使者入唐将先进的文化知识带入了日本，这其中就包括了汉文。他们将汉文进行简化处理，又将简化后的汉文分为了片假名和平假名，最后日本的文字日文就这样诞生了。古代时期日本民众非常崇尚武士道精神，神化天皇，为天皇效力。这种情况直到二战后才得以缓解，现在的日本民众就很少有人相信天皇是神了。日本还是一个好战的国度，他们曾多次挑起战争，最严重的是二战的侵华战争，侵华战争给中国人民带来了抹不去的阴影，到现在他们还没有向中国道歉。因为他们觉得二战的侵华战争战败的原因是因为美国投入两颗原子弹让日本不得不以无条件投降结尾，以这个为借口，还将侵华战争说是日中战争，可见的日本有多么不要脸。他们应该像二战中和他们一样的法西斯国家德国学习，德国战败后并没有像日本那样死不要脸而是忏悔自己的行为，为自己所犯下的罪行感到厌恶，日本实在得向德国学习了。"],
            mg: ["美国（American），全称美利坚合众国，首都华盛顿。拥有近240多年的历史。使用的官方语言是英语。使用的钞票是美元。是一个资本主义国家。原本这片大陆是印第安人的地盘。因为哥伦布发现新大陆，欧洲殖民者就开始陆续登上美洲大陆。上岸后的欧洲殖民者被当地原住民印第安人热情款待，将他们视为远道而来的客人。而却万万没想到这些他们眼中的客人却是一个个即将将魔爪伸向他们的恶魔。当欧洲殖民者到达这片大陆的时候他们发现美洲遍布印第安人，美洲相当多的资源及财富都已经在印第安人手中了。以至于欧洲殖民者非常的眼红。起初还好，殖民者只是断了他们的食物和生活必需品的来源，之后宣布《独立宣言》独立建立美国，美国的政府军就开始大量屠杀印第安人。将他们曾经的恩人屠杀殆尽，从最初的500万人口到最后今天的25万，掠夺了大量的财富，将仅剩不多的印第安人赶到了偏远地区，并且给他们的后代灌输思想，让他们的后代变得不再像印第安人。还不要脸的将屠杀印第安人纪念日设定为美国的感恩节，那是有多么的无耻嚣张呀。二战时期，美国还是一样不要脸靠着地理优势大量发战争财，向全球各地及日本售卖大量的枪支弹药。他唯一做的对的就是向日本投了两颗原子弹，投的这两颗原子弹还是因为美国看着日本这个小弟疯狂膨胀还敢偷袭自己的地盘所以为了保护自己的利益才出手的，美国总是正面一套，背面一套，时不时给你来上一拳，这就是美国。"],
            bx: ["对不起，我不提供任何书写功能","我只是一个聊天程序，不具备书写功能","我无法为您提供书写功能","我的能力还没有达到可以靠想象书写内容","我只是一个程序无法靠想象进行书写","我还不具备这么强大的能力"],
            bxd: ["我是由javascript语言编写的,由linang工作室（创海工作室）开发。","我是javascript语言编写的"],
            kfgs: ["我是由linang工作室开发的，linang工作室原名创海工作室。"],
            mc: ["我的世界，原英文名minecraft，简称MC。起初是由瑞典的一名名叫notch的程序员在休闲时刻开发的。后来成立了mojang工作室专注开发我的世界。"],
            hot: ["HotMusic一款音乐集成软件，音乐全部免费，是一款良心软件"],
            gjc: ["GJ-C是一款视频音乐并肩的软件，很不错"],
            csr: ["我的创始人名叫，是一位程序员"],
            xhs: ["我只是一个程序，无法喜欢上任何一个人","我是一个程序，我没有感情","我没有感情，无法喜欢上一个人","我是冰冷的，没有感情的，喜欢不上人","程序给我附加的规则，让我无法喜欢上一个人"],
            ys: ["我不存在意识，我只是一个程序","我不存在任何意识","我只是程序员制作出来的程序而已，不存在意识"],
            nsr: ["我并不是人，我只是一个程序","我既没有身体，也没有感情，更没有意识，所以我不是一个人","我达不到人的标准","我不可能是人，我也不可能成为人"],
            nd: ["我只是一个程序，我无法对任何事物做出辩解","我没有感情，我无法做出辩解","我无法客观的叙述","我无法为你做出评价"],
            

			reply: function(message) {
				var replyMsg = "";
				if (message.includes("你好")) {
					replyMsg = this.greetings[Math.floor(Math.random()*this.greetings.length)];
				} else if (message.includes("你是谁?")) {
					replyMsg = this.intro[Math.floor(Math.random()*this.intro.length)];
				} else if (message.includes("你叫")) {
					replyMsg = this.intro[Math.floor(Math.random()*this.intro.length)];
				} else if (message.includes("你是谁")) {
					replyMsg = this.intro[Math.floor(Math.random()*this.intro.length)];
				} else if (message.includes("你是")) {
					replyMsg = this.intro[Math.floor(Math.random()*this.intro.length)];
				} else if (message.includes("你知道我是谁吗")) {
					replyMsg = this.wss[Math.floor(Math.random()*this.wss.length)];
				} else if (message.includes("我是")) {
					replyMsg = this.wss[Math.floor(Math.random()*this.wss.length)];
				} else if (message.includes("我究竟是谁")) {
					replyMsg = this.wss[Math.floor(Math.random()*this.wss.length)];
				} else if (message.includes("我是谁")) {
					replyMsg = this.wss[Math.floor(Math.random()*this.wss.length)];
				} else if (message.includes("我是谁")) {
					replyMsg = this.wss[Math.floor(Math.random()*this.wss.length)];
				} else if (message.includes("我会是谁")) {
					replyMsg = this.wss[Math.floor(Math.random()*this.wss.length)];
				} else if (message.includes("我是谁啊")) {
					replyMsg = this.wss[Math.floor(Math.random()*this.wss.length)];
				} else if (message.includes("你男的女的")) {
					replyMsg = this.xb[Math.floor(Math.random()*this.xb.length)];
				} else if (message.includes("你是男的吗")) {
					replyMsg = this.xb[Math.floor(Math.random()*this.xb.length)];
				} else if (message.includes("你是女的吗")) {
					replyMsg = this.xb[Math.floor(Math.random()*this.xb.length)];
				} else if (message.includes("你的性别")) {
					replyMsg = this.xb[Math.floor(Math.random()*this.xb.length)];
				} else if (message.includes("你有性别吗")) {
					replyMsg = this.xb[Math.floor(Math.random()*this.xb.length)];
				} else if (message.includes(" ")) {
					replyMsg = this.kg[Math.floor(Math.random()*this.kg.length)];
				} else if (message.includes("对我的看法")) {
					replyMsg = this.kf[Math.floor(Math.random()*this.kf.length)];
				} else if (message.includes("你对我的看法是怎么样的")) {
					replyMsg = this.kf[Math.floor(Math.random()*this.kf.length)];
				} else if (message.includes("你看我怎么样")) {
					replyMsg = this.kf[Math.floor(Math.random()*this.kf.length)];
				} else if (message.includes("你觉得我怎么样")) {
					replyMsg = this.kf[Math.floor(Math.random()*this.kf.length)];
				} else if (message.includes("你感觉我怎么样")) {
					replyMsg = this.kf[Math.floor(Math.random()*this.kf.length)];
				} else if (message.includes("你对我有什么看法")) {
					replyMsg = this.kf[Math.floor(Math.random()*this.kf.length)];
				} else if (message.includes("操你妈逼")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("傻逼")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("操你妈")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("你妈的")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("你他妈")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("我操你妈")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("我操你妈逼")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("吃你妈奶皮")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("傻逼东西")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("你妈了个逼")) {
					replyMsg = this.zh[Math.floor(Math.random()*this.zh.length)];
				} else if (message.includes("机器人回怼")) {
					replyMsg = this.jqrhd[Math.floor(Math.random()*this.jqrhd.length)];
				} else if (message.includes("你知道")) {
					replyMsg = this.zd[Math.floor(Math.random()*this.zd.length)];
				} else if (message.includes("看看我")) {
					replyMsg = this.kkw[Math.floor(Math.random()*this.kkw.length)];
				} else if (message.includes("喜欢什么音乐")) {
                    replyMsg = "我喜欢听" + this.musicType[Math.floor(Math.random()*this.musicType.length)] + "，您呢？";
                } else if (message.includes("喜欢什么游戏")) {
                    replyMsg = "我喜欢玩" + "《" + this.yx[Math.floor(Math.random()*this.yx.length)] + "》" + "，您呢？";
                } else if (message.includes("喜欢玩")) {
					replyMsg = this.xhw[Math.floor(Math.random()*this.xhw.length)];
				} else if (message.includes("喜欢听")) {
					replyMsg = this.xht[Math.floor(Math.random()*this.xht.length)];
				} else if (message.includes("什么？")) {
					replyMsg = this.sms[Math.floor(Math.random()*this.sms.length)];
                } else if (message.includes("你喜欢")) {
                    replyMsg = this.xhs[Math.floor(Math.random() * this.xhs.length)];
                } else if (message.includes("你有意识")) {
                    replyMsg = this.ys[Math.floor(Math.random() * this.ys.length)];
                } else if (message.includes("干嘛")) {
					replyMsg = this.gm[Math.floor(Math.random()*this.gm.length)];
             }

                // 关于天气
                  else if (message.includes("天气")) {
                    replyMsg = "今天的天气是...(我说我不知道你信吗)";
                 }
                  else if (message.includes("明天下雨")) {
                    replyMsg = "明天的天气预报显示可能会下雨";
                 }
                  else if (message.includes("天气变化")) {
                    replyMsg = "是的，最近天气变化很大，我们要注意保暖哦！";
                 }

                 // 关于时间
                  else if (message.includes("几点")) {
                    var date = new Date();
                    replyMsg = "现在是" + date.getHours() + "点" + date.getMinutes() + "分";
                 }
                  else if (message.includes("星期几")) {
                    var days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
                    var date = new Date();
                    replyMsg = "今天是" + days[date.getDay()] + "";
                 }
                 
                  else if (message.includes("时间")) {
                    var date = new Date();
                    replyMsg = "现在时间是" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + "点" + date.getMinutes() + "分";
                 }

                 // 关于兴趣爱好
                  else if (message.includes("电影")) {
                    replyMsg = "我喜欢看科幻电影，你呢？";
                 }
                  else if (message.includes("喜欢的电影")) {
                    replyMsg = "我最喜欢的电影是《星际穿越》，你呢？";
                 }
                  else if (message.includes("音乐")) {
                    replyMsg = "我喜欢听古典音乐，你呢？";
                 }
                  else if (message.includes("看书")) {
                    replyMsg = "我喜欢看科幻小说，你呢？";
                 }

                 // 关于生活
                  else if (message.includes("生活意义")) {
                    replyMsg = "我觉得生活有意义，因为我们可以为自己和他人创造价值。";
                  }
                  else if (message.includes("幸福")) {
                    replyMsg = "我认为幸福是一种内心的感受，是对生活的满足和喜爱。";
                  }
                  else if (message.includes("生活习惯")) {
                    replyMsg = "我每天都会保持锻炼和健康的饮食习惯，您呢？";
                  }
                  else if (message.includes("人生最重要")) {
                     replyMsg = "我认为人生最重要的是健康和家庭，您呢？";
                  }

                 // 关于职业
                  else if (message.includes("成为聊天机器人")) {
                     replyMsg = "我是由一群热爱技术的工程师开发出来的，他们希望我能帮助更多的人解决问题";
                  }
                  else if (message.includes("你有意思")) {
                     replyMsg = "作为一个聊天机器人，谢谢你的夸奖";
                  } else if (message.includes("不想活")) {
					replyMsg = this.sm[Math.floor(Math.random()*this.sm.length)];
			   	  } else if (message.includes("自杀")) {
					replyMsg = this.sm[Math.floor(Math.random()*this.sm.length)];
			   	  } else if (message.includes("不活")) {
					replyMsg = this.sm[Math.floor(Math.random()*this.sm.length)];
			   	  } else if (message.includes("妈妈去世了")) {
					replyMsg = this.qs[0];
			   	  } else if (message.includes("爸爸去世了")) {
					replyMsg = this.qs[1];
			   	  } else if (message.includes("奶奶去世了")) {
					replyMsg = this.qs[2];
			   	  } else if (message.includes("爷爷去世了")) {
					replyMsg = this.qs[3];
                } else if (message.includes("你喜欢什么")) {
                    replyMsg = this.xh[Math.floor(Math.random()*this.xh.length)];
                } else if (message.includes("在干什么")) {
                    replyMsg = this.gsm[Math.floor(Math.random()*this.gsm.length)];
                } else if (message.includes("谢谢")) {
                    replyMsg = this.xx[Math.floor(Math.random()*this.xx.length)];
                } else if (message.includes("再见")) {
                    replyMsg = this.zj[Math.floor(Math.random()*this.zj.length)];
                } else if (message.includes("你会吃饭")) {
                    replyMsg = this.eat[Math.floor(Math.random() * this.eat.length)];
                } else if (message.includes("天气")) {
                    replyMsg = this.weather[Math.floor(Math.random() * this.weather.length)];
                } else if (message.includes("你会运动")) {
                    replyMsg = this.sports[Math.floor(Math.random() * this.sports.length)];
                } else if (message.includes("中国")) {
                    replyMsg = this.zg[Math.floor(Math.random() * this.zg.length)];
                } else if (message.includes("日本")) {
                    replyMsg = this.rb[Math.floor(Math.random() * this.rb.length)];
                } else if (message.includes("美国")) {
                    replyMsg = this.mg[Math.floor(Math.random() * this.mg.length)];
                } else if (message.includes("China")) {
                    replyMsg = this.zg[Math.floor(Math.random() * this.zg.length)];
                } else if (message.includes("Japan")) {
                    replyMsg = this.rb[Math.floor(Math.random() * this.rb.length)];
                } else if (message.includes("American")) {
                    replyMsg = this.mg[Math.floor(Math.random() * this.mg.length)];
                } else if (message.includes("中华人民共和国")) {
                    replyMsg = this.zg[Math.floor(Math.random() * this.zg.length)];
                } else if (message.includes("日本国")) {
                    replyMsg = this.rb[Math.floor(Math.random() * this.rb.length)];
                } else if (message.includes("美利坚合众国")) {
                    replyMsg = this.mg[Math.floor(Math.random() * this.mg.length)];
                } else if (message.includes("帮我写")) {
                    replyMsg = this.bx[Math.floor(Math.random() * this.bx.length)];
                } else if (message.includes("语言")) {
                    replyMsg = this.bxd[Math.floor(Math.random() * this.bxd.length)];
                } else if (message.includes("你是由什么语言")) {
                    replyMsg = this.bxd[Math.floor(Math.random() * this.bxd.length)];
                } else if (message.includes("你什么语言")) {
                    replyMsg = this.bxd[Math.floor(Math.random() * this.bxd.length)];
                } else if (message.includes("你的开发")) {
                    replyMsg = this.kfgs[Math.floor(Math.random() * this.kfgs.length)];
                } else if (message.includes("我的世界")) {
                    replyMsg = this.mc[Math.floor(Math.random() * this.mc.length)];
                } else if (message.includes("hotmusic")) {
                    replyMsg = this.hot[Math.floor(Math.random() * this.hot.length)];
                } else if (message.includes("GJC")) {
                    replyMsg = this.gjc[Math.floor(Math.random() * this.gjc.length)];
                } else if (message.includes("你的创始人")) {
                    replyMsg = this.csr[Math.floor(Math.random() * this.csr.length)];
                } else if (message.includes("你是人")) {
                    replyMsg = this.nsr[Math.floor(Math.random() * this.nsr.length)];
                } else if (message.includes("怎么看")) {
                    replyMsg = this.nd[Math.floor(Math.random() * this.nd.length)];
                } else {
					replyMsg = "抱歉，我不明白你的意思。";
     
				}return replyMsg;
			}
		};

		// 发送用户输入并显示聊天记录
		function sendUserInput() {
			var userInput = document.getElementById("userinput").value;
			var chatlog = document.getElementById("chatlog");
			var userMsg = '<div style="border-radius:5px;background-color:#;box-shadow:0 0px 3px rgba(0,0,0,0.2); overflow-y: scroll;"><br><div style="width: 95vw; margin-left:calc(50% - 50vw);margin-right: calc(50% - 50vw);margin: 0 auto; z-index: 9999;display: flex;">我：' + userInput + "<br><br></div></div>";
            var botMsg = '<div style="border-radius:5px;background-color:#;box-shadow:0 0px 3px rgba(0,0,0,0.2); overflow-y: scroll;"><br><div style="width: 95vw; margin-left:calc(50% - 50vw);margin-right: calc(50% - 50vw);margin: 0 auto; z-index: 9999;display: flex;">ChatRobot：' + chatbot.reply(userInput) + "<br><br></div></div>";					
            	chatlog.innerHTML += '<div style="border-radius:5px;width: 95vw; margin-left:calc(50% - 50vw);margin-right: calc(50% - 50vw);margin: 0 auto;">' + userMsg + "<br>" + botMsg + "<br></div>";
      document.getElementById("userinput").value = "";
		}
                    
