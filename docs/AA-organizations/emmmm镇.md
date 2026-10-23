# emmmm镇（hmmmm 首都）

> **类型**：政治实体 ｜ **跨周目**：1/3（三周目）｜ **地点**：(509,-372)
> **首脑 / 主导者**：LongBlast500

---

## 总述

唯一开着城门的镇子。

---

## 三 · 三周目

#### 一句话

全服唯一一个开着城门、宣布中立的镇子，也是唯一一个给跑得太远的人留了条回家路的镇子。

#### 由来

2024 年 2 月 9 日 21:29:41，[[persona:LongBlast500]] 建了这个镇[Towny]。第二天晚上七点十分，它成了国家 **hmmmm** 的首都。

名字起得很随意。`emmmm` 是聊天里那种「嗯……」的语气词，加个「镇」字。它和它所在的国家的名字（hmmmm）是同一种东西——**一个人打到一半的犹豫，被注册成了地名**。

#### 组织形态

七十二个区块，八个成员，是三个国家首都里最小的一个，却也是唯一有几个「全服唯一」的：

| 字段 | emmmm镇 | 全服其他 6 个城镇 |
| --- | --- | --- |
| `open=true`（任何人可自由加入） | **是** | 全部 false |
| `neutral=true`（不参与战争） | **是** | 全部 false |
| `outpostspawns`（前哨传送点） | **有**（282, 1048） | 全部为空 |
| `taxpercent` | **false** | 其余为 true |
| `spawnCost` | **0.0** | 其余 10.0 |

[Towny]

把这几项放在一起看：**免费、开放、中立、可以在远处设前哨。** 这是一座公共城的配置。

八个成员里有四个是同一人：`LongBlast500`、`LongBlast501`、`LongBlast502`、`LongBlast503`、`LongBlast504`——**后四个全部注册于 2024 年 2 月 13 日 16:16:45 到 16:32:59 这十七分钟之内**，每个号的 `lastOnline` 只比 `registered` 晚二十到六十秒[Towny residents]。

另外三个是真的成员：[[persona:QuickBat]]、[[persona:Baerstu]]、[[persona:yoinon]]。三个人拿着完全相同的五个镇级职位：`assistant, donator, helper, sheriff, vip`。其中 [[persona:QuickBat]] 还额外有国家级的 `assistant` 与 `helper`——**他是全套数据里唯一一个有国家职位的人，而他并不在这个国家的管理层里**[Towny]。

#### 关键事件

**2 月 10 日 18:53**：[[persona:LongBlast500]] 在聊天里说 `建个国家？`[日志 02-10 18:53]。这是他当天说的最长的一句话之一。二十五分钟后，hmmmm 成立。

**2 月 13 日**：一天认了 50 块地，是它全部的扩张。同一天十六点十六分到十六点三十二分，他连开了四个小号。那天他在聊天里几乎没说话。

**3 月 2 日 18:09:24**：它把 homeBlock 挪了一次[Towny `movedHomeBlockAt`]。这是三周目记录里**唯一一次真正意义上的搬迁**——其他三次非零值分别是 Polaris 挪了一格、`dh` 建镇后 47 分钟改家、`mdm` 的默认残值。

那之后它再没有动过。3 月 2 日也是三周目倒数第二次有人的日子。

#### 与他方的关系

- **hmmmm（国家）** —— 它是首都。hmmmm 的盟友是 SCSC 与猫柠夏语，敌人为空，公告板默认值。
- [[org:喵喵盛宴]] ／ [[org:Polaris]] —— 分别相距 1661 与 1235 方块。**它是三个首都里唯一一个离主聚落群很远的。** 主聚落六个镇的出生点都挤在半径 500 方块内；emmmm镇 单独在东南方，一块飞地甚至飞到了方块 (272, 1040)。
- [[persona:QuickBat]] —— 与 [[persona:LongBlast500]] 的接话 329 次，是全服第 11 强的一对，也是 emmmm镇 里唯一一段真实的人际关系。
- [[org:大会要]] —— 无关系。

[详见 [[_组织关系网络]]]

#### 结局

数据完整保留到最后。

#### 证据附录

- `towny-datafolder/data/towns/emmmm镇.txt`（`open` / `neutral` / `outpostspawns` / `taxpercent` / `spawnCost`）
- `towny-datafolder/data/nations/hmmmm.txt`
- 成员与职位：`_work/tmp/towny/towny_report.md` §6.2、§6.3
- 飞地与连通性：同报告 §5.1
- 四个小号的注册时间：`towny-datafolder/data/residents/LongBlast50{1,2,3,4}.txt`
- 建国的对话：`_work/corpus/chat_by_day/2024-02-10.txt` 18:53

---

## 史料

- **证据等级**：强
- 源档案：
  - `gen3/archive/organizations/emmmm镇`

> 本条目由各代组织档案合并而成。`组织` 指向玩家条目，`组织` 指向组织条目。
