import pritam from '../assets/pritam.jpg'
import AR from '../assets/AR rehman.jpg'
import Play from '../assets/play-circle-regular-24.png'
import Ins from '../assets/instagram-logo-24.png'
import Tw from '../assets/twitter-logo-24.png'
import Fb from '../assets/facebook-logo-24.png'


export default function Header(){
    return<main>
            <nav>
                <span className="container">
                    <span className="container1">
                        <button>
                            <a href="">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABQFJREFUWEedmFuoFVUcxn/flGkvCVZqBWWZXUzBiiiygqB66KmHSKJMUCRM6Eo9ZCJZGUKFSBcEhQh9CQqKJLogVPbQFYwyOKmVJaUnK30wipqvWTOz914ze2bvfVxw2Htmr/9a3/r+3/+yjhg6hDAeOm/4BEF3nd738lv0AQ0z41fDt6ouMXx+fMgmQPEKDUiaTzZk29xoNMvKrIkyEWDYvgq4AwifpwPTg0sF48C44TPBNkk7c9ijbFIeIHw0GMQ0Ft+dejLyctD9mNn5JtEoAfXeFC9+BDZgXlKS/N2koK5BRUND2Ld9O2YD6jKRW/SBaHtrDiEeSqSt/cFRdWvtnP3IbD8GPFHsHqItCHLQaIZZWqyW9GTVekRAYVpqvwC+p/BpMUZmpR3zRim5r+e+/iBvNLX9FPBoFcnA0w+N9sh6jaS1/QYd9mtRYKdLQVuG7lCnbGJ4F0l6tR5RfXKwPQX4GTh1MKBR9DRwhf0hWpXo396sBn069YOIZyPB/AfsKP68G/QDsEfSsZyg1KcgTisPMBM8D3QBcDFwBZA0qa+MkeVKtLmePrsAU1sq2DmzfPkbcH0ifX08tcz2ycBC4GZghWGKqm4dk3RhzGMA0C14toNxkV2LsVPStbFBak8SBAZChg7jCHAo2/CgFNNfdZftmVnieByzDHFC9OslknZ3niMNCTt9LtvggZrnVwL7gVuBa4Bze26ozTRHUA4usPwWeJuUHIxn2b4uY/2DSBKrJK3rlJeKqG1/COSMjBww5cSW+SnwNrAZeFNSansG8GsE8g1JtxTPNVHbHsPMaUjFQdhjGUtfA7sx4ygvpIdLMU8HzgDmhz/DrOKkFZiB5VcygFcCN0aAdkla0OCyvIr/CUztTi7WC6dZIKlHfdxaNFRy2yEoFgPLDHM6bmjJ8n8kSqZ1gqbusnDqEMLx2AvMlfSP7ZOAecA5wEzDNJnDiF+AfcA3UpLGHWYZKHcDi4BgX2fuaCJNLQBVMnUu6q8K2vvOEkQ6Dp4POrEGOH78C/g8yz/bs3Vek7Sn3CfkqxuyFPBegzi/zTL23MYoS52+I7hpApIegC3/6SNgvaTttpcALzcYvC+pq6m6y0LBW10HZDim4tRB1IHFn0LegdxV04CzggtLV56fCf824OxhaEv3rZOSVW1hfxnwRd3LhiWJFCIk6karau495a4Pj8FFG4GLGnQTY71c0peNLstbVXsv+LxaI7YD8zFihmGGIOSSEEmBlaPA94YDgu9CzTO8myRKnXpSpuA1wKpGGZh9SpLZld4oPlkJaCmwJZb1RJNk6dJNWW7a5OLuEWpiZZRrLlHJfGMeyl1lJ+BdoBDeA0Y7zOiX8PX3llZmF3CplJfb7ui/dSi0FOnVoBAhZeswmjz7Q7oVdOiBFkr6tL5ya79ue0V233qxa9Byz2kV7GA/L+67gTRdg+pVwPbzWUJcObKGRiPy6Szr93r1ms0o16DVmevWDi7/g0t+uWeY9IikZyqCqXV+QwGVQr8T8rY2VPVo/ebrUdme9m5P5gDiXkmvN5HY38I2VOyq7vP8NBm8DPRwVgJm5UDLRFnNMZWEMQZaH9qOQd1kpXmoo2vqnRu0FTrHu7KmK2T20Mp22tnQLYZy8gmwVVIotA2jnYGKywYSVS5bT6SV3doWGOXUnfVHAZHPjcKy8m+f+McJcdHCXduJRwbat+7xW4al/geXKts7yRa+kgAAAABJRU5ErkJggg==" height="30px"/>
                        </a>
                        <a href="">Spotify</a>
                    </button>
                    <button>
                        <a href="">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA49JREFUWEetWD2PTVEUXWsmxEfEdGL+gGY0ChERCo1CJHoqOokohEImMy8ZBdFMpRkVvUSmoFAIEVGoNH4AiU4QROIs995z3r3n836IW8zk3XPO3mvvtfc6+z1ixEMAGrGvf4tvhSCUsUlwqrPQ7BDQsvVkxb2o/417vANBtpr3fsSl6EM3HaAQWj+gUhiNbbsoaQXAS8fqSZLvO9elKNyOTAInU+bHaaRlAu8AHHDvPwM4QvLTfJ9LYJ7bHCAvWBtzr4UuMhktAXgD4FDE+QcAx0h+KZHU5Teulpru9hlf3pJ2AXgB4GjTKmz++NbfAjhF8te4Au3yGVA2DIkwMosEtqvsnBlw9hTAWZJ/7L5yV/gSMKKGQkNGekjgwsjIH5G8WNxbrKEB6/NzkjYA3LI0+YeSF/7iRpWl1b568tdshnq70+qKkS4B2BqGUSsw47K6TPJB4Lig/qOE0UjnCDwGsDAMyHZ4ZNgAOE/yST8ZQZfl8Us6AeA5gJ2xMb/Bekmzi78rAT1N8lWvHOTF2Kmw0Qqo1wD3jSziZpsPLgL6DcDxVs1z105eBwnJLCNU4cjVAESHJJO5RM1jbhLLklkCmFHhjPm8MGYLyXMUqLnPkq09702gwlN4mrS3iSKr5kEzGGmRwjboq3BvuU6A4eTAnXBWEzUP5U3ahHA17tkJXlP6UwmI92xWF/E1/2ZpN0j6DmBveKKnZ7qTBbflyvasfiW5f24quMsqQNcB3G41p1TD/5KH6IwzXU8DqyTv2eWiMNo6N0broNYS3Z3AYSamGcl1v5ni6ysjnO14Wh9cK/nvnJWpyZyNAIXSXLjL2gu1A1TSmzHZCtPUAYoVUXMuCle+pAbQvzd+9mQEaFSGLPQ5oB7KZmmKGxAZmtuxZMaFhfVu6s8BKsyuAaCEMoFccHjCgUrVwdwM4gJLKEuvjkIKihlyTLBql1Y/vIHLSLJzf1js7tOMzGTIi8nZDKNs2t7VkOUvHVu7DIURNYBKWiXMqsTatg89t0pQ7JOhGvIz5BtpKCs/+S6bg4v5m8/X+aIO0zQNUHt2bJelk76kGwDuFIL9SXJPsOZMGOkHgd1ZpoGb1bm7pQR6VKe/Wkg6DOAZgIORgXo+3iJ5JWdY0n0A9beUHVH9fay/YIY/SKQlHAxouUJLnObn3mzQBUXxZ8IkyZladxjHOC557KnqvqWgO/+r7cRY2D75n/SAv8t3hTtTeMqHAAAAAElFTkSuQmCC" height="30px"/>
                        </a>
                        <a href="">Home</a>
                    </button>
                    <button>
                        <a id="nav_search" href="">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABW1JREFUWEedV11oHFUU/s7MpsGGPtSGSitVbIu1z636IErwBypURKu0FWnxF5PMltRmpiHubCbJxiQ7rUp3N63Bah+0grEQUUSEUn8iCG3FF0tNabFQRLRWCVbpZmeOzM7s7szOnd1J9mnn3nPP+e53fi9B+CMALNjx1qO2/Sf8MuX/oYVIy8ENgbE49hd2MSAKr7MezUR5JxpOEx7FqkOrQWguoIYUuJt7e4ybiy3WUwQ8DsJ62FhdPivhVzBmGfjEludPHB4b+6shkpD7PGlfNDRkaM/+gdtstlJg2g1gSZNr3wDjKEnyaC5rXFksu5E2FDX9NGC/D1AzIPU6/mXw9oKZ+SzkgVgMhZKH0K29tp+YxoIe5e8AmmbGty0l+Wdnz1oyfxczPQBI2wC+J4CMuDOfzRxxQyIYF+KgprJo9VcRSqrpnQw+7ts6T2Q/l8uOfN/IZV1qaosEmgSwxpNjBm8tmJnPhaEaATRgI6mm1jHoJwCt5VJE/GOilHjorTeNa/UxIaosPT39q6wl8lfMuNNTPFe05XWTBwev1mpb48wNAFJ69RMgftIhj4GLnCjdWxgd/TNmDpdT9pW9/bcmZOksiG9xvgl0OGcOdYkzPuzKqlyXltooMZ2r+dC+O58dORMfTE2yW01tJdCn3kqpaMurJg8aV93vmAwlVT3FwLCnZDpvDj+xGDCVM4qaPg3wZhcDPZ/PDr0X1teAIUXVZwDc596BnsmZQx/WK4jKWhHwpJbax0wHXDz4KJcd3h7MQrdlBmLR/6Go+i8AbncVyGvc4rbIHwF7XtU32RLOeMnxQ97MbGrsskDaE5Jq6joDSx3Y7W2JVmPQKAqbvoexWcfp3N+3XLZarrni/HfezCxvdr1AHVJU/R8AbeXjbfKygmE4341bncBCBaimacv+49Y5dsvHH3kzs7LCkJPDdbWyGu5VlUqvfqHcOB1Alryh8IYxWw+oFkNuYYicmgjoUgNZ+3XeHO5oypCf9qSqn2TgwXKksfRi/sDQ0bj81PTUgHarqU4CTZQDl6TDOXMwXIvq+KcAIC2lMlPWY+WLnDn8qDDLGl6z1hiVXv0UAR0OiwxWCmam0GzUCcxDXX3GesmyLlTcZEn2/RPjr8+ExllRz6gD2a2lHyHmL73l6zbk9ROm8Zso7f1rgaB2Nrp79SkiOIOYw/Tloi1vrlXYOOkFKJqxGmydBtwhjon7CtmR8VDMCdLUB8jd7ewz1sqW5bSPVi9dfc21WUgCTnOdb5FPEWMDqJxel9rb5I2GYRTFp4OzT4ghx8fJ3oGdDNs/fpwD2burfc1LNf+NnaVOd/w4UimunutPrmiTtxjGYEn8kgnCDAPy9hVV7wcwEvQ5fQO2p22bZkqJ4uzSGzfRfMLaCIk7wLSNAK8Se68oTzszPv798vkdU1NTViTHPqKEMs5+l5beTczvAEiEhcruiNLvDPpnATxcEXB62Yql8k7DMOzozK20jojgckwqvfodTEgT8KwYmE89owSiQlG6MTA5Pj6naPpxYuyoFE8b/MHKtsQuwxi0o9wXSPtq7RaU35f3Ge0tUmk7MT0Gwlovg0ogXALDacoXJfDkIXPkgi+2KKnqxxjYVYUt8dH8eOaliKexn/PoVuAHGtVQGzRaUlT9GHygGHh3whx+IXzvum5fG04a9vHmuV/fAAFStNTbYHKY8e4nHmsjozIOK/GQ1aQULTVZBcU0mj8w5GRyMJFrX01cJrAeo4OETilq+hBgXymYmazrsqCWSIaijDV05iI9XW9LMGHEYWsB1hdwi3Dah0gWcLUALH51zY+R8xgIPbsXGqviIbe59cgOUU3EqKduTXfQSmybsQWB/wHGZC5LvdsymwAAAABJRU5ErkJggg==" height="30px"/>
                        </a>
                        <a id="nav_search" href="">Search</a>
                    </button>
                </span>
                <span className="container2">
                    <span className="first">
                        <button>
                            <a href="">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABJVJREFUWEetWEGIHEUUfX9mAwubgzksIUQPHpOTKAhedEFWCHpXUBMUBOP0yEa2ZzdJ92zv9AST6SEhTM/qQcGoIGYET+agOQx48mJuRhRECCpxPSZkITNdobqrM1XdVd29WfuyMzW//n/1//uvfi+h6CEADBB/Mpb61ay72EpjatrN13fxVAMxc0ggMH6myk8CKBdnt4HVeLPdcopLfEqmWvSFTv+HUppSppRMBmG1XC/ZRAh7m55lO0ug2lK8xKJxGHTHzVbbS8sR9jrCHji5vn7g3vz8vc88b6e8VmrmyJRIy3Yflj4MfLJabQ+MbSQYaZMDyNo01trLiFiTgGOM4fVh37+qp4QZppHUJkBJ10iAOGwCOOhGy1kjRudFuGth4L8sEzxu2aJaMd4E2j4FmrbLmBTMmCHJ5t1TZw/PzdVuiTaZ0tz9Q4MPz28Xg8g3hNa+cskkQNxR03avM+DFOBnEPgiD7iUlgMwRzWcpQyqbZoAYwqBbwqHERgA6zoArgjs3hj3/6aRQ1aTEoENALkNrbQ8R24jd1mgzvNDx4rKK43MO8Y/veZv7a3cnvEzz/HtE7OhWr3uzKiQDqQmW7Zi7TADKgk5LY9nuFwDeiBWCUTDsd1oGqmaWFVKrMl+FQ7oM8QiNVnuZGPuedxWBtgeBfzC5FXWPSqREhzTlzQbTddnMZsYhEZIs270NYDHOEtFLw57/Q3nbJ0xLfSiH0JM62oi3xDrkc/UWp84BQmO13SNitjjrl2Hgv2mKlW22EkCJ6JUp9TDwKe0mfsOfbDlHaox+Ec537izUD1zxvJ20bvqeSzmk+VXfZXKGRJdldEhmiWU7NwB6SnTYiTDwP9cRaQ8Zql4yDsKynVMAXRQgr4eBv2wUSalOWu7HGapydcS78xziq83TpxfZZO4fMNT5pDadRE98dOncX1oJSEea3NwjrPVtH23E4mC47XUns1ruNTAcS7qNrQ973QuGPoqXi2/7XIZUDuWEUcPFxqr7GhG+EiBuhn3/aOGlb9Kh8rYX81ABqTmItzxvfuHulF8l+5Pi1p8ZBt7PJpF8tKtjFyXjgRu2+ykBbycg6HIYdFZygFIOmZDm7jJxuSY+9ROjCJi7JZq2+wIDxiLW9u0/fz00Go2muth7GGFlpU7Es6ClybKdWwAdTt7z6JVBv/OdFpA+Q+bxQ58h0famkYe4v3YXjJ2NAdVwddDzX62WIeF0L7f9LNAMobXqPAmiP8RvO9FCfXHL8+7kNEnuMvmApgGtkEMSMfNXBJ+x3J8A9mzSbXhnGPif6ERSXctlSB5hS3TIVH/hs2E7DQKFQgB/HAT+89ngxcIorKvc9jNSm2fnlRXvscm+6b8A9nGr+5Po8Y8zV4kCqLBkFV4UTQmS5cCy3W8BPMcIX7NJ1N+6eI6/Nj18pLZXh4DZqzQQv6WuOkuo1Zfi/2ZE0Tjsd8fxjJRmkb9Ka5KTHS3eP3Pm4N+///bfaPSNqkPFwlh81vRXc3HK9xsVorLTEsNct1Z2nKF1NqVKuz6iU31+5Lca1XEWQ3l+tRaFoiN2qDb686mrDwCzXwNYMQHw3gAAAABJRU5ErkJggg=="/>
                                Your Library
                            </a>
                        </button>
                        <a href="" id="plussign">
                            +
                        </a>
                    </span>
                    <span className="second">
                        <h4>
                            Create your first playlist
                        </h4>
                        <h5>
                            It&apos;s easy, we&apos;ll help you
                        </h5>
                        <button>
                            Create playlist
                        </button>
                    </span>
                    <span className="third">
                        <h4>
                            Let&apos;s find some podcasts to follow
                        </h4>
                        <h5>
                            we&apos;ll keep you updated on new episodes
                        </h5>
                        <button>
                            Browse podcasts
                        </button>
                    </span>
                    <span className="fourth">
                        <div>
                            <span>

                                <a href="">Legal</a>
                                <a href="">Safety & privacy</a>
                                <a href="">Privacy policy</a>
                                <a href="">Cookies</a>
                            </span>
                            <span>

                                <a href="">About Ads</a>
                                <a href="">Accessibility</a>
                            </span>
                            <span>
                                <a href="">Cookies</a>
                            </span>
                        </div>
                        <button>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABgFJREFUWEeVWH3sVmMYvq5DvoawNEpLbRWjTBoLK0ZlyxAbklDWtFIrWZOVlcKSlekLpRb68E+TskQMbcrSFGn5WGkqy8dGbTbhXN77nPu873Pec9739+vefh/neZ77fu77uj/PIeqJAFRYrS60sH2i4gDkJfJEL0huDJkKAghCVZvK5Te+NVWocEFeaGO8TmynNcbbmVKqMRfFKNb1IIYCuAbA+fZjXibwK4BfAHwOYCUZbQ3RCi9qpFyqUDlMOUUlnQZgNIAJEDonPFVydYpL+wDMg7CEEf9u2fhUlRZJ0kgAswG1a8pSopcLN9QmklxVF8PFJGgGncmXNBvA5CRKM/Xz/x8AcSmA/yDsAnFJiJxg8VilaSRn5bWoy7JG8MSSBfxyAA8GZ8zS1wBMSWtDclU/Mtpiz5J6AdoB8GTfXgfgtsAUOz+f5Phm7itNY0nzATwaMK725xcBDPf1lSTvr4ZhiqgZ8ZDvL0Rq1AoAlwWyZpCcXqZUaR2SNBHA3IBhNiM+oVjnAjgCoI3vXUHyq1wsS90AfOuoHAVwIYAYwDsABgRnh5N8MzTGkAncm/pSsdqC+AnAWc48neQMO6k4HiFwmTN9SPLmMislrQdwq+0JGB2Rr0gyI9Zm6wAOQ+jCiMdDGYUsk/R0JUCneYRsJlm1SorXA0wuMveRNJckFIampHsgrHFzvyF5eaJcWjoOAGjv8seSXJSry3WCTnGXnOP39Cf5aXappN8BnOfP3Srx80MDhOxiK5Jn+n5HkoddqbEAFvj6AZIXN0RI0mAAGxzqQxF5UaBMF0D7EiyEw4yijo26sBkZS5sB3OT8A0jas6FkRluMZYr0JvlliHRVwVhaRmGEQ72cEUdmXVLSLZVWsdEPbyHZrwydzHmSzJ1j3DXjSVrWJiTFzwKc4qVhFslpmc9zQS3FuyqBZ7XEoqKaBW6ZpbKlsNEqksPKFUpViqVxFfe+lGqAxYw4JlBoiMC1TLV9n+SgPEIeSJIOAejgCi3yOHCz0BfEQGfcBmhToY3kW0cPAPf6+e/NCFfO2NpVZFssGe0h6TUqS/uaQn9VetbpjSxvvN64idV48v0maSnp0p8kPYmKCh0LMuME9GqNQqE4P5/+OUby7KrLwslDkkV/d9+0oPwtDYHEOX0AWBYafQHg3RY0TlzmvN8BsNaTkc1QHlPaS0bWnBPKtQ5JHwPo73tDSa5Jy7ksSO8G9JZ377dJDkkllM/gksYAWujnl5IclV0qxUMBpjEFfEQyKw91Y5Y0B8DjfjDNDB/4fUrc4hbvJHllAaFAuUoLmgdigp95iuTMbFvSywAe8b3nSD5ZRSjnWakvgM98bTfJnhkIcawLQPzse0dJtq3x+lWhQtJ7gAZ5Jt5F0vpYQlK8B2Dmpj4kd7jDCgiZyIOAOnhFvoERP6kJ0hEB7b149SS5u4BSrWf9AeBU3+9E8qDXpxvNTQnSwn5G7BrKCGLIu71kLjPXWTTvBdGL5D+pZbK2kgV2rrnWIT0YwgY39yDJTs7fBsLXoHq4wWMZ0epdlXLd3i04ozJg/ehvE3bwdRu4SErSaAGLnWkdyTsaIGQ82RA3l+QkKXnZegPCMC9AVoS7VuInP36UJUmlYo8S8GowQi+IyHGSOqYurVL3SguxKlwlSYbGfgAn+eLVJLdnvS04eh8jrrakaTh+1AlOh/va7PyBZ8YLAO5MPYoVEZmMq0EGhaPvNgA2Gy0BNdDdZH+mknwmu6+oUAlM7r6lAB4O7D8OcCOE24N0uNZeCH3Iv6oSY9uDoX6T1zWbjzKaR/KxMldnhpXs1TSUNBPA1PRQaYuw6m4TYQRgJ5C8EtVcmGaT/TLnTCZpCOcoh1AzTbOPIJLMLXNafFF0pcN3MU/vQyBsJqrWosK93sNa/fXD52Er/5Mqc1HnRobk16038nnLVDL6t+l3HmdshUL5APP0vQ7AA5VXm97Zxwb3p83RVs23QljFiNaEs6uaf3gKTrWOoUETLSJV8imnKW9+MzfCtgxpffg1+dTWOp8WQymch8oDrWkStnhtq4F1Sf8DHeJdSAhwLGQAAAAASUVORK5CYII=" height="18px"/>
                            <p>
                                English
                            </p>
                        </button>
                    </span>
                </span>
            </span>
        </nav>
        <section>
            <aside className="section_1st">
                <span className="arrow_keys">
                    <button>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAq9JREFUWEelWMFqGzEQHe22uYf0H0qbW44NGH9PTOkh4Fwc4mAoTUiCaUzp56RN7j3k0kNPvRRiEgq9BSwVrbRryZqRZmxdbHYlzZunN2/EKrBDAYBp/vFGOJ9am92TfmnfxIAE4DhTcez+afzTQekANe85UXg8lmchsRxDnIFkkyxLAkizU6DkS5Zy48gEn0MLj88Qh8XCnEQSGx0ZBxAlQg4Sv7+QocIBS88fESED0MZRUJ/LkRnjJLyBYwcHw9EbrV8+fr04eXCbSl1TNSu6kfWhAlEfhqPX2qg7A/Cvqqr+57PT37Ts6M0CQITkTTnP94fjt6ZafAeAnYYXBT+uzyd7caacqmjWtr5i6TKilmZDBMy88iHnuq7fffk0/sWDkCoG1VB2M5/F4Oh4t1rAjVHQgQFd92aX458lMDl1IWvD6fh/C0ZpuAUD216Jc1jUvdmVB5P1pLwMAkvKCCaAPRge7yoDtwCw7R6bOegXLGZI5oLq5hWDz3hwNHLMdGDgCXS9nxyTwJ1XK73YgVqxOzAqBlNBf3Y2uS9phvte1O073YTsKOjPzif3UgvEAWLXD8SpQ9NFQUUsxdBwoIjFtHFDHwov1ksJxIvt84O2wixT9i6u4Enpev/al/sm3U90ZGGxIkzNIw9Cyj4xYcRR0l7GUZ/fyDJVa7gxEBqjLf8Tb4zrtSMUApf2fOug2hGtM8dQEp0Lx+Xij+8b1lxlO0XXj7C84v94042zl10/Ml6cbTm0BNAd7QVt61n/nU4//uFIsZ0TaZtD6ZpdQIKpmxtV2VJPiOiEbLkIhTsWYQ10lXHoW5uH9utGmnzxYwOls7WwUIvS1hHPzJIjeCklOdBQ3qwkn4+kzK12EIFTU/lKeVi9ki3TTassm95qLhhvm4Bzci4OTgg21IJ9/AecNkU6tNZWPAAAAABJRU5ErkJggg=="/>
                    </button>
                    <button>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAsRJREFUWEetWMFOGzEQfbMcemorReLSGzeE1D8A0Q/aXqAtlyBFIhci9QAq/Z6Iqp8Q0f5Dqv5AE1fe9cb2ejweB/YCIfb4zXszb7wQ7EMATPdb8QmXqrcVFnZfuzX2R/yoTyliTzJNQjNnpYA05zBrfOzajOL1lYAIBMOqK8II5ChVRgCoNjNHU+Vhfa0IifG67gkuxsiLXyik5zPEgPBdE9OnqbOohjQbxLTD/s0VfokhtTjqhbVtGgYmUPyR88c8ko9fZu/MBm++fZ39qjXYHOxM25fpaD9Nj0C0BPDqgHB+t7j5nR6SekxF29dR3X6+XgE4cbv+bMmcfV/Mn9goufwYeSqN0R/XXs6O0WweARy6cbhuyJzeLeYRU7mSkDAWqcl1XweKNo8gGRR3QBaQxvKlVm8vZsc42PwEMBmYIjKn9yOmtFLKkiV88/Dbq+v32GIJg4m9yhCw3jb48HA7X4V9W26V/ia0ezQbcmy1V9MeFDBxcf6aBmcPtze2+MVL1zjv4gWt7FX9kY6pHwS8Nba/CSNQQzqMHTiXz0pW2x0ekFkC1NUTwABygaX4bu/+ggXsdJJlwYz1Zo7c24fCqtgVdQem08pJNV/5C11B+IA5XUc6jcfTzhlk1PZ9hw3FPKqbhJW0nvJFzegdog/duqPaYN00qVvLzssBYnbwifi/7sAYHA7eM4wOnsysN/fvYLJkmWrz+2CHKwEnbnrLw1WmKPo2ex/KlMzO49rL6RERLU13/TDndlSkV4uC5mF/l4paTMptthe0Bv9exxNeI03cceGrVdD2cTZ+S8GfdCSM8svHjCRLWHmeV5ZBMNYUGaOalYoiTeaqmKR9gZQetRw6KhlCEhZlyTQa6rDwkTh3KaOu0Id30zgAsyacdxnJamFW0KRo2goKNDPGTQGm/jSwX4ihcD4LHhP8686nFiIn/Ac55kk68p/LpwAAAABJRU5ErkJggg=="/>
                    </button>
                </span>
                <span className="signin">
                    <button>
                        Sign Up
                    </button>
                    <button>
                        Log In
                    </button>
                </span>
            </aside>
            <aside className="section_2nd">
                <span className="top_part">
                    <a href="" id="popular_artists">
                        <h1>
                            Popular artists
                        </h1>
                    </a>
                    <a href="" id="show_all">
                        Show all
                    </a>
                </span>
                <span className="mid_part">
                    <div className="cards_section">
                        <div className="card">
                            <div className="card_img">
                                <img src={pritam} alt="Artist"/>
                            </div>
                            <div className="card_text">
                                <h5>Pritam</h5>
                                <h6>Artist</h6>
                            </div>
                            <button>
                                <img src={Play} alt="Artist"/>
                            </button>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={AR} alt="Artist"/>
                            </div>
                            <div className="card_text">
                                <h5>Pritam</h5>
                                <h6>Artist</h6>
                            </div>
                            <button>
                                <img src={Play} alt="" />
                            </button>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={pritam} alt="Artist"/>
                            </div>
                            <div className="card_text">
                                <h5>Pritam</h5>
                                <h6>Artist</h6>
                            </div>
                            <button>
                                <img src={Play} alt="" />   
                            </button>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={AR}alt="Artist"/>
                            </div>
                            <div className="card_text">
                                <h5>Pritam</h5>
                                <h6>Artist</h6>
                            </div>
                            <button>
                                <img src={Play} alt="" />
                            </button>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={pritam} alt="Artist"/>
                            </div>
                            <div className="card_text">
                                <h5>Pritam</h5>
                                <h6>Artist</h6>
                            </div>
                            <button>
                                <img src={Play} alt="" />
                            </button>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src={AR} alt="Artist"/>
                            </div>
                            <div className="card_text">
                                <h5>Pritam</h5>
                                <h6>Artist</h6>
                            </div>
                            <button>
                                <img src={Play} alt="" />
                            </button>
                        </div>
                    </div>    
                    <div className="grid_section">
                        <div className="links_part">
                            <ul>
                                <li>
                                    <h4>Company</h4>
                                </li>
                                <li><a href="">About</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href=''>For the Record</a></li>
                            </ul>
                            <ul>
                                <li>
                                    <h4>Communities</h4>
                                </li>
                                <li><a href="">For Artists</a></li>
                                <li><a href="">Developers</a></li>
                                <li><a href="">Advertising</a></li>
                                <li><a href="">Investors</a></li>
                                <li><a href="">Vendors</a></li>
                            </ul>
                            <ul>
                                <li>
                                    <h4>Useful Links</h4>
                                </li>
                                <li><a href="">Support</a></li>
                                <li><a href="">Free mobile app</a></li>
                            </ul>
                            <ul>
                                <li>
                                    <h4>Spotify Plans</h4>
                                </li>
                                <li><a href="">Premium Individual</a></li>
                                <li><a href="">Premium Student</a></li>
                                <li><a href="">Premium Duo</a></li>
                                <li><a href="">Premium Family</a></li>
                                <li><a href="">Spotify free</a></li>
                            </ul>
                        </div>
                        <div className="icons_part">
                            <button>
                                <img src={Ins} alt="icon" />
                            </button>
                            <button>
                                <img src={Tw} alt="icon" />
                            </button>
                            <button>
                                <img src={Fb} alt="icon" /> 
                            </button>
                        </div>
                    </div>
                    <div className="copyright">
                        @ 2024 Spotify AB
                    </div>
                </span>
            </aside>
        </section>
        </main>
} 