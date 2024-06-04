import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
            "id": null,
            "name": "MLB.com"
            },
            "author": "MLB.com",
            "title": "Negro Leagues stats added to MLB - MLB.com",
            "description": null,
            "url": "https://www.mlb.com/news/faq-negro-leagues-stats-major-league-record",
            "urlToImage": null,
            "publishedAt": "2024-05-30T11:57:38Z",
            "content": null
        },
        {
            "source": {
            "id": null,
            "name": "BBC News"
            },
            "author": null,
            "title": "Israel extends control of Gaza's entire land border - BBC.com",
            "description": "An Egyptian source denies that tunnels used by Hamas still exist on the country's border with Gaza.",
            "url": "https://www.bbc.com/news/articles/c1994g22ve9o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/dc7e/live/8f7f6800-1e60-11ef-80aa-699d54c46324.jpg",
            "publishedAt": "2024-05-30T11:38:25Z",
            "content": "Israel's military has said it has taken control of the strategically important buffer zone along the Gaza-Egypt border known as the Philadelphi Corridor, meaning it now controls Gaza's entire land bo… [+3057 chars]"
        },
        {
            "source": {
            "id": "associated-press",
            "name": "Associated Press"
            },
            "author": "KANIS LEUNG, ZEN SOO",
            "title": "14 pro-democracy activists convicted, 2 acquitted in Hong Kong's biggest national security case - The Associated Press",
            "description": "Fourteen pro-democracy activists have been convicted in Hong Kong’s biggest national security case by a court that said their plan to effect change through an unofficial primary election would have undermined the government’s authority and created a constitut…",
            "url": "https://apnews.com/article/hong-kong-security-law-verdict-5b8e7ac1100342db642040985bc417b2",
            "urlToImage": "https://dims.apnews.com/dims4/default/816feb8/2147483647/strip/true/crop/4000x2250+0+208/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc0%2F13%2Fc1821402bfc4a684f126bba90e41%2Fb95defaa8abb470d89816dc187182268",
            "publishedAt": "2024-05-30T11:17:00Z",
            "content": "HONG KONG (AP) Fourteen pro-democracy activists were convicted in Hong Kongs biggest national security case on Thursday by a court that said their plan to effect change through an unofficial primary … [+5705 chars]"
        },
        {
            "source": {
            "id": "google-news",
            "name": "Google News"
            },
            "author": "New York Post ",
            "title": "Mexican Mayoral candidate Alfredo Cabrera assassinated at rally - New York Post ",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vbnlwb3N0LmNvbS8yMDI0LzA1LzMwL3dvcmxkLW5ld3MvbWV4aWNhbi1tYXlvcmFsLWNhbmRpZGF0ZS1hbGZyZWRvLWNhYnJlcmEtYXNzYXNzaW5hdGVkLWF0LXBvaW50LWJsYW5rLXJhZ2Uv0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-30T11:12:00Z",
            "content": null
        },
        {
            "source": {
            "id": "cbs-news",
            "name": "CBS News"
            },
            "author": null,
            "title": "Nurse fired for calling Gaza war \"genocide\" while accepting compassion award - CBS News",
            "description": "A nurse was fired by a New York City hospital after she referred to Israel's war in Gaza as a \"genocide\" during a speech accepting an award for her compassion.",
            "url": "https://www.cbsnews.com/news/nurse-fired-hesen-jabr-calling-gaza-war-genocide-compassion-award/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/05/30/0f8f01c2-5852-4c4b-a83f-f499650c280e/thumbnail/1200x630/2ee144f1369a8477e0aa654b95913568/ap24150729635312.jpg?v=c5044be0004eac09882c007ac02fef6d",
            "publishedAt": "2024-05-30T10:47:37Z",
            "content": "A nurse was fired by a New York City hospital after she referred to Israel's war in Gaza as a \"genocide\" during a speech accepting an award. \r\nLabor and delivery nurse Hesen Jabr, who is Palestinian … [+3343 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Gabrielle Fonrouge",
            "title": "Foot Locker stock surges 13% as turnaround shows signs of life - CNBC",
            "description": "Foot Locker is making gains under CEO Mary Dillon, who has been working to win back brands and Wall Street's confidence with an ambitious turnaround plan.",
            "url": "https://www.cnbc.com/2024/05/30/foot-locker-fl-earnings-q1-2024.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107420548-1716896402770-gettyimages-2154487174-FOOT_LOCKER_EARNS.jpeg?v=1716896471&w=1920&h=1080",
            "publishedAt": "2024-05-30T10:46:06Z",
            "content": "Foot Locker's turnaround is starting to bear some fruit. \r\nThe sneaker giant saw comparable sales decline 1.8% during its fiscal first quarter, far better than the 3.1% drop-off that analysts expecte… [+4167 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "MarketWatch"
            },
            "author": "Barbara Kollmeyer",
            "title": "Fed fears have rattled stocks, but that's not the top risk, says Josh Brown - MarketWatch",
            "description": "Critical information for the U.S. trading day",
            "url": "https://www.marketwatch.com/story/fed-fears-have-rattled-stocks-but-thats-not-the-biggest-risk-to-the-market-says-josh-brown-24e01315",
            "urlToImage": "https://images.mktw.net/im-23067992/social",
            "publishedAt": "2024-05-30T10:45:00Z",
            "content": "Its been a fairly upbeat May for tech \r\n COMP\r\n and the S&amp;P 500 \r\n SPX,\r\n but things are starting to unravel some as fears over higher-for-longer rates return with a vengeance.But our call of the… [+6787 chars]"
        },
        {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Jurors to begin second day of deliberations in Trump hush money trial - Reuters",
            "description": null,
            "url": "https://www.reuters.com/legal/jurors-begin-second-day-deliberations-trump-hush-money-trial-2024-05-30/",
            "urlToImage": null,
            "publishedAt": "2024-05-30T10:35:00Z",
            "content": null
        },
        {
            "source": {
            "id": null,
            "name": "Pure Xbox"
            },
            "author": "Ben Kerry",
            "title": "Two Games Are Available Today With Xbox Game Pass (May 30) - Pure Xbox",
            "description": "Including a former PS5 exclusive!",
            "url": "https://www.purexbox.com/news/2024/05/two-games-are-available-today-with-xbox-game-pass-may-30",
            "urlToImage": "https://images.purexbox.com/d4abe5445eaa4/1280x720.jpg",
            "publishedAt": "2024-05-30T10:00:00Z",
            "content": "Welcome to your final Xbox Game Pass update for May 2024! We have two big titles coming to the library today, including the former PlayStation-exclusive platformer HUMANITY.\r\nHere's a closer look at … [+855 chars]"
        },
        {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Kelly Kasulis Cho",
            "title": "Sotheby’s to auction world’s largest stegosaurus fossil, Apex - The Washington Post",
            "description": "Past fossil auctions have come under fire for selling at prices museums can’t afford and for allowing rare discoveries to disappear into private collections.",
            "url": "https://www.washingtonpost.com/science/2024/05/30/apex-stegosaurus-sothebys-dinosaur-auction/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OHQGFN4OHOFZF2Q7VK6X76EYXQ_size-normalized.JPG&w=1440",
            "publishedAt": "2024-05-30T09:32:38Z",
            "content": "Apex, the worlds largest stegosaurus skeleton ever found, is set to go on auction at Sothebys this summer with an estimated value of up to $6 million a listing that has sparked both public intrigue a… [+3299 chars]"
        },
        {
            "source": {
            "id": "usa-today",
            "name": "USA Today"
            },
            "author": "USA TODAY",
            "title": "Life on Ukraine's front line: 'Worse than hell' as Russia advances - USA TODAY",
            "description": null,
            "url": "https://www.usatoday.com/story/news/world/2024/05/30/ukraine-front-line-russia-advance/73891287007/",
            "urlToImage": null,
            "publishedAt": "2024-05-30T09:12:12Z",
            "content": null
        },
        {
            "source": {
            "id": "google-news",
            "name": "Google News"
            },
            "author": "CNN",
            "title": "China’s Xi Jinping calls for peace conference and ‘justice’ over war in Gaza as Arab leaders visit Beijing - CNN",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiVmh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNS8zMC9jaGluYS94aS1qaW5waW5nLWFyYWItbGVhZGVycy1jaGluYS1pbnRsLWhuay9pbmRleC5odG1s0gFPaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyNC8wNS8zMC9jaGluYS94aS1qaW5waW5nLWFyYWItbGVhZGVycy1jaGluYS1pbnRsLWhuaw?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-30T09:09:00Z",
            "content": null
        },
        {
            "source": {
            "id": "politico",
            "name": "Politico"
            },
            "author": "POLITICO",
            "title": "Biden's Black voter troubles are setting off alarm bells - POLITICO",
            "description": null,
            "url": "https://www.politico.com/news/2024/05/30/biden-black-voters-00160520",
            "urlToImage": null,
            "publishedAt": "2024-05-30T09:02:13Z",
            "content": null
        },
        {
            "source": {
            "id": null,
            "name": "Tom's Guide"
            },
            "author": "Rory Mellon",
            "title": "PlayStation launches biggest sale of the year with PS5 games from $4 — here's 25 deals I'd buy - Tom's Guide",
            "description": "PlayStation is celebrating Days of Play 2024 with a truly epic sale",
            "url": "https://www.tomsguide.com/gaming/playstation/playstation-just-launched-its-biggest-sale-of-the-year-with-ps5-games-from-dollar4-heres-21-deals-id-buy",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/CUmF2PeaaHTVPWdHr7x6hm-1200-80.jpg",
            "publishedAt": "2024-05-30T08:39:31Z",
            "content": "Days of Play is an annual celebration of all things PlayStation, and the 2024 iteration just kicked off with a host of freebies confirmed and the launch of a massive PlayStation Store sale with lowes… [+1083 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "KABC-TV"
            },
            "author": null,
            "title": "Actor accused of stabbing Hollywood makeup artist multiple times at her Sunland home - KABC-TV",
            "description": "An actor has been charged with attempted murder for allegedly stabbing his former girlfriend - a Hollywood makeup artist - multiple times in her Sunland home, prosecutors said.",
            "url": "https://abc7.com/post/actor-nick-pasqual-accused-stabbing-hollywood-makeup-artist/14889674/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/14889827_052924-kabc-11pm-actor-stabbing-arrest-CC-vid.jpg?w=1600",
            "publishedAt": "2024-05-30T07:40:18Z",
            "content": "LOS ANGELES (KABC) -- An actor has been charged with attempted murder for allegedly stabbing his former girlfriend - a Hollywood makeup artist - multiple times in her Sunland home, prosecutors said W… [+1639 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Karen Gilchrist",
            "title": "UBS overhauls wealth management leadership in wider board shake-up - CNBC",
            "description": "The new appointments provide an important signal on the future direction of the bank as it tees up a replacement for outgoing CEO Sergio Ermotti.",
            "url": "https://www.cnbc.com/2024/05/30/ubs-overhauls-wealth-management-leadership-in-wider-board-shake-up.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107211554-1679323065352-gettyimages-1248858788-AFP_33BP6XQ.jpeg?v=1685721539&w=1920&h=1080",
            "publishedAt": "2024-05-30T07:37:39Z",
            "content": "LONDON UBS on Thursday announced a shake-up of its executive board in the latest phase of a radical overhaul of the Swiss banking giant, following its takeover of fallen rival Credit Suisse.\r\nA newly… [+1938 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Ruxandra Iordache",
            "title": "South Africa's ruling ANC set to lose majority in pivotal vote, early results show - CNBC",
            "description": "Early indications from 17.54% of polls show the ANC gaining 42.95% of support, with the Democratic Alliance (DA) wresting 25.24% of votes.",
            "url": "https://www.cnbc.com/2024/05/30/south-africa-election-anc-set-to-lose-majority-in-pivotal-vote.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107421739-1717049111423-gettyimages-2155233505-jdc_7361_vdlulp3r.jpeg?v=1717049933&w=1920&h=1080",
            "publishedAt": "2024-05-30T07:37:31Z",
            "content": "South African's governing African National Congress appears set to lose majority control in the country's most seismic political transition since the end of the apartheid.\r\nEarly indications from 20.… [+2838 chars]"
        },
        {
            "source": {
            "id": "axios",
            "name": "Axios"
            },
            "author": "Axios",
            "title": "American Airlines sued for racial discrimination by Black men - Axios",
            "description": null,
            "url": "https://www.axios.com/2024/05/30/american-airlines-black-passengers-racial-discrimination-lawsuit",
            "urlToImage": null,
            "publishedAt": "2024-05-30T06:41:03Z",
            "content": null
        },
        {
            "source": {
            "id": "espn",
            "name": "ESPN"
            },
            "author": null,
            "title": "Yankees rally to win after 'wonky' interference call in 1st - ESPN",
            "description": "An infield fly and interference call curbed a bases-loaded rally for the Yankees in the first inning, but they rallied to beat the Angels 2-1 on Wednesday.",
            "url": "https://www.espn.com/mlb/story/_/id/40243281/yankees-rally-win-wonky-interference-call-1st",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0530%2Fr1339419_1296x729_16%2D9.jpg",
            "publishedAt": "2024-05-30T06:06:00Z",
            "content": "May 30, 2024, 02:06 AM ET\r\nANAHEIM, Calif. -- An infield fly and interference call loomed large in a game for the second time in less than a week.\r\nThis time it was the New York Yankees and Juan Soto… [+3293 chars]"
        },
        {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Helen Regan",
            "title": "Iceland volcano dramatically erupts again as streams of lava reach town’s defensive walls - CNN",
            "description": "A volcano in southwestern Iceland erupted Wednesday for the fifth time since December, spewing massive lava flows that threaten to cut off the town of Grindavík and prompting the evacuation of the world-famous Blue Lagoon.",
            "url": "https://www.cnn.com/2024/05/30/europe/iceland-volcano-eruption-grindavik-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24150515823562.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-05-30T05:32:00Z",
            "content": "A volcano in southwestern Iceland erupted Wednesday for the fifth time since December, spewing massive lava flows that threaten to cut off the town of Grindavík and prompting the evacuation of the wo… [+3161 chars]"
        }
        ]
    constructor(){
        super();
        console.log("Hello, i am constructor");
        this.state={
            articles: this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div className="container my-3">
       <h2>NewsMonkey - Top Headlines</h2>
       
       <div className="row">
            {this.state.articles.map((element)=>{
                if(element.urlToImage !== null){
                    return <div className="col-md-3" key={element.url}>
                        <NewsItem title={element.title.length>20 ? element.title.slice(0,20)+"..." : element.title.slice(0,20)} description={element.description.length>80 ? element.description.slice(0,80)+"..." : element.description.slice(0,80)} imgUrl={element.urlToImage} newsUrl={element.url}/>
                        </div> 
                }     
            })}

       </div>
      </div>
    )
  }
}

export default News
