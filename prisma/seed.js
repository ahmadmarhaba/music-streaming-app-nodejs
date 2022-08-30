const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const neffex = await prisma.author.create({
            data: {
                name: 'Neffex',
                image: "https://i.pinimg.com/564x/0e/29/b4/0e29b408518bdb4696e109efb8d08f82.jpg",
                Albums: {
                    create: {
                        name: "New Beginnings",
                        image: "https://cdns-images.dzcdn.net/images/cover/36872e2b4999441227dde8ab60a84a7e/500x500.jpg",
                        Songs: {
                            create: [
                                {
                                    name: "Scars",
                                    image: "https://img.youtube.com/vi/7eJcI17mXNg/maxresdefault.jpg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661704484/Neffex/New%20Beginnings/wr10lwsugpnceeddpslf.mp3",
                                    duration: 150.674286,
                                    size: 2411343,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Sometimes",
                                    image: "https://img.youtube.com/vi/7eJcI17mXNg/maxresdefault.jpg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661704561/Neffex/New%20Beginnings/kk2tphqtoqakbrnpzin3.mp3",
                                    duration: 154.697143,
                                    size: 2475709,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "New Beginnings",
                                    image: "https://m.media-amazon.com/images/I/71zXR-YLtlS._SL1200_.jpg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661704619/Neffex/New%20Beginnings/gomnncjy7qyeshe1b3la.mp3",
                                    duration: 141.87102,
                                    size: 2270491,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Mind Reader feat MASN",
                                    image: "https://img.youtube.com/vi/0isyyCTdPcI/maxresdefault.jpg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661704672/Neffex/New%20Beginnings/eibvra60o6omezrrendo.mp3",
                                    duration: 173.97551,
                                    size: 2784163,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Ive Been Let Down",
                                    image: "https://i.ytimg.com/vi/KBU_ljdBoFM/maxresdefault.jpg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661704715/Neffex/New%20Beginnings/mjlspud89m7hthukhpke.mp3",
                                    duration: 156.26449,
                                    size: 2500786,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "I Wanna Play A Game feat. Jez Dior",
                                    image: "https://i.ytimg.com/vi/6jBhSCM64gI/maxresdefault.jpg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661704774/Neffex/New%20Beginnings/xiq7g2cvcpfxwmedfzdr.mp3",
                                    duration: 209.04,
                                    size: 4181325,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Hell Wont Take Me",
                                    image: "https://i.ytimg.com/vi/XHRWhvZ36UE/maxresdefault.jpg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661704806/Neffex/New%20Beginnings/g2mb80qm2ljpipna0nee.mp3",
                                    duration: 142.576327,
                                    size: 2281776,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Dont Hate Me",
                                    image: "https://i.ytimg.com/vi/-jch_T3J5QM/maxresdefault.jpg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661704842/Neffex/New%20Beginnings/zewsupx9wqb01ma1ceto.mp3",
                                    duration: 149.080816,
                                    size: 2385848,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Be Somebody feat ROZES",
                                    image: "https://i.ytimg.com/vi/T2HN-MjfMbU/sddefault.jpg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661705069/Neffex/New%20Beginnings/dpakd2uzmylev5adojoy.mp3",
                                    duration: 148.427755,
                                    size: 2375399,
                                    mimeType: "mp3"
                                },
                            ]
                        }
                    },
                },
            },
        });
        const nf = await prisma.author.create({
            data: {
                name: 'NF',
                image: "https://p16.resso.me/img/tos-alisg-i-0000/761b2008c81d4bf48edf01d5d776d46a~c5_500x500.jpg",
                Albums: {
                    create: {
                        name: "The Search",
                        image: "https://media.pitchfork.com/photos/5d4864ac04c06a00092f65da/1:1/w_600/NF_TheSearch.jpg",
                        Songs: {
                            create: [
                                {
                                    name: "The Search",
                                    image: "https://i.ytimg.com/vi/fnlJw9H0xAM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAFSn-Ee_psg0AWwoI4EXs_pfPT8Q",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661799521/NF/The%20Search/l8vyeya3pewjbhpwdmdg.mp3",
                                    duration: 195.317551,
                                    size: 3125635,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Leave Me Alone",
                                    image: "https://i.ytimg.com/vi/XGGWhOUYObc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDfBSaqlBlmouAZCFwAvCjOPxe8UA",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661799674/NF/The%20Search/oiosdelyqd00mrqhnvva.mp3",
                                    duration: 311.902041,
                                    size: 4990987,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Change",
                                    image: "https://i.ytimg.com/vi/j__VYXZ-5Cw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDIX9oOhSy4w7QSVS3GAXbaPxFRmQ",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661799756/NF/The%20Search/fc4qjyd3ip5i3dei3x76.mp3",
                                    duration: 252.917551,
                                    size: 4047235,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "My Stress",
                                    image: "https://i.ytimg.com/vi/1O1tj2phCQY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCrenFfa3ny5k9GlEYX7vp14cieUw",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661799826/NF/The%20Search/lxtbkaadbnkawkjnqgtr.mp3",
                                    duration: 280.790204,
                                    size: 4493198,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Nate",
                                    image: "https://i.ytimg.com/vi/LmHmawgCAHg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAuwVnFXOTt57BoXzjyNHvuTU2PgQ",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661799897/NF/The%20Search/qdbskqsyhhotoa5p1hye.mp3",
                                    duration: 312.058776,
                                    size: 4993495,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Time",
                                    image: "https://i.ytimg.com/vi/E1ZVSFfCk9g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB-9cRTDcpwCbxD3F7vPxkprFJhlA",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661799953/NF/The%20Search/mbgtayrpbsczgyozvtce.mp3",
                                    duration: 233.012245,
                                    size: 3728750,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Returns",
                                    image: "https://i.ytimg.com/vi/TkiDouBnDrU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDwGc0XSFmyUSo4M4mjRB3CLEXgsQ",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800013/NF/The%20Search/vduxxckoaucbbzhmvhyi.mp3",
                                    duration: 233.116735,
                                    size: 3730422,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "When I Grow Up",
                                    image: "https://i.ytimg.com/vi/lxRwEPvL-mQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBcRcQ_I6IjWkY_354Y7Bvc6BNZ4A",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800069/NF/The%20Search/xfrrywqm7bd7r9whzut7.mp3",
                                    duration: 196.937143,
                                    size: 3151549,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Only ft Sasha Sloan",
                                    image: "https://i.ytimg.com/vi/KzWP7APhsO4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDIybTq8Lvtcowx_mx3TBLsLlAeKw",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800132/NF/The%20Search/hrcpet3x7fpgsmlppxbt.mp3",
                                    duration: 244.323265,
                                    size: 3909727,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Let Me Go",
                                    image: "https://i.ytimg.com/vi/6WcxRWufzus/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA44CsjikSyPiIwEMejT0P8faCH4g",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800201/NF/The%20Search/vbs2k76f3tbw74wuplqr.mp3",
                                    duration: 278.987755,
                                    size: 4464359,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Hate Myself",
                                    image: "https://i.ytimg.com/vi/1f6F7tGDcQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDkjI1kXksdBAX9q39td46Ey8PbtQ",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800315/NF/The%20Search/gqv4oxyavvuhrs1jdv6j.mp3",
                                    duration: 261.302857,
                                    size: 4181400,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "I Miss The Days",
                                    image: "https://i.ytimg.com/vi/fy9YETB068M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCiT1HLZFM-UhuuyOzxQcK8eCjRmg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800383/NF/The%20Search/abcway7xwzjtias2fgui.mp3",
                                    duration: 270.262857,
                                    size: 4324760,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "No Excuses",
                                    image: "https://i.ytimg.com/vi/4k3YY0bMXU4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA3PL76_Ygh_UofocEkx8F5o9qKjQ",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800439/NF/The%20Search/lefktqtz1hx9ysvbh2kb.mp3",
                                    duration: 202.788571,
                                    size: 3245172,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Like This",
                                    image: "https://i.ytimg.com/vi/EQHy_rwRwKA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBbbCFGnEhsd9Ybo41FUzml7nnSyA",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800498/NF/The%20Search/dh36aiqslv2bvhcmluk1.mp3",
                                    duration: 208.718367,
                                    size: 3340048,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Options",
                                    image: "https://i.ytimg.com/vi/eMKCzDcvjfc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCbZmQ6STOEexEXYkg50l3BkKw2Xg",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800565/NF/The%20Search/to4znaie4ba6lohz2soy.mp3",
                                    duration: 207.124898,
                                    size: 3314553,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Thinking",
                                    image: "https://i.ytimg.com/vi/aC_iMZKVSsE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWSiH2vgYx6vnVI51qNrEAb-ItnA",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800615/NF/The%20Search/ldxniuqelvt4rtiegiiw.mp3",
                                    duration: 193.201633,
                                    size: 3091781,
                                    mimeType: "mp3"
                                },
                                {
                                    name: "Trauma",
                                    image: "https://i.ytimg.com/vi/akhttJU-0mc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB2Dp4HmpglyPpY13ypBVp1qYVaKA",
                                    url: "https://res.cloudinary.com/ddlvleezc/video/upload/v1661800669/NF/The%20Search/ooteiakrirtxwihrjq2d.mp3",
                                    duration: 248.293878,
                                    size: 3973257,
                                    mimeType: "mp3"
                                },
                            ]
                        }
                    },
                },
            },
        });
        console.log('Created artists with albums and songs');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();