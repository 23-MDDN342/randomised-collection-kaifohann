Discrete variables:
lip_value - lip type (2)
eye_value - eye type (4)
Fhair_type - Female hair type (3)
FfringeCut - Female fringe middle parted (yes/no)
MHair_type - Male hair type (3)
Stache - Man has moustache (yes/no)

Continuous Variables:
headWidth - width of head
faceHeight - height of the face 
hairCurve1, hairCurve2 - curve of bottom of female hair


For this project I was intrigued by the idea of creating faces with a LOT of variation but with a clear style to tie them together. The initial system I created for crit was based on a deck of cards. It had heaps of variation but I didn't consider the continuous variables needed to meet the project guidelines. I struggled to come up with how I could introduce a continuous variable without it breaking the faces, so I scrapped this aesthetic. 

To help me find a new aesthetic, I searched Pinterest for some inspiration. I found [this](https://www.pinterest.es/pin/526921225168078112) image, which hugely effected the style of my work. My final colours were directly inspired by this. 
I came up with my initial sketch (see sketch.jpg), adjusting my inspiration's facial feature style to make it 'codable'. These sketched facial features were condensed over the project, so I could get the work done in time, but I made sure to provide enough 'types' to give faces plenty of combination options. The final 'rounded' look was heavily influenced by modern japanese art such as [this](https://www.pinterest.es/pin/1012958141196885511/).

I really liked the idea of overlaying the faces like the original inspiration, potentially using the multiply blend mode to create that overlapping pen effect. This idea ended up falling apart later in the project as I realised shapes that made up the faces would be visible when set to multiply. I unfortunately had to scrap this idea and attempt another arrangement.
Scrapping the overlapping faces was confirmed as a correct decision after I had to start using white fill for the heads (layers behind weren't even visible).
In my original sketch.jpg, I also had 3 types of faces - red ones that faced left, blue ones that faced forward, and peach ones that face right. I was planning to split these three types into three functions but I had to scrap this idea as I run out of time. I still however, split my functions into a male face and female face generator. 

I chose to have the same face rectangle for all characters, but make the width and height continuous variables. The bounds of these parameters was based on the 20x20 square and the soon-to-be-present hair that would add width and height to the base shape.
I slowly built up the discrete features, paying close attention to stroke weight to create a smooth, balanced look. I made sure that the positiioning of most of these features moved with the continuous variables of the face size so the faces didn't have strange proportions. 

At this point, my faces were still arranged as a simple grid on the screen. I decided that I would introduce a form of randomness in the grid arrangement, inspired by Zavier's work (student example). I wasn't sure how to create this mixed tile effect but I came across [this](https://www.gorillasun.de/blog/an-algorithm-for-irregular-grids/?ref=gorillasun.de) artist's work. They have a grid similar to what I was hoping to create [here](https://openprocessing.org/sketch/1555988?ref=gorillasun.de), which I used to create the same effect in my code. The grid uses recursion to create the grid pattern randomly, a perfect solution for the effect I was trying to create. 

It took a bit of time to get this working in the arrangement file. I had to restructure how the draw function worked, and draw two seperate square grids to fill the page, but eventually I got the effect I was looking for. I then used 'scale' based on the grid square dimensions to make the heads the correct size within the frame, ensuring each head had enough breathing room in their respective pocket. This grid system ended up giving me a much greater variation in the size of my heads, which made the canvas so much more interesting. 

When the design was a flat, uniform grid, the randomly spawned arrangements showed that the caps were an overwhelming presence among the 'population'. I had planned to use average random to change their presence to an edge case, however, the new grid had a greater number of smaller faces which didn't present this issue. I decided not to adjust this in my code. 

I decided that of the 3 types of random, I would leave out 'averaging' all together as it created the edge cases and 'popular' cases that would ultimately limit the great amount of variation I was looking for. 

I did introduce weighted selection and conditional randomness. At this point my faces were only red and blue, and I wanted to add the peach seen in my sketch but only in small amounts. I did this by introducing the 'colour spinner' method discussed in class, making the peach only show up in the lowest and highest 5% of random(0, 100). (0-5=peach, 6-50=red,51-94=blue, 95-100=peach). I played with these percentages a bit before settling on these numbers. I really loved how the final effect turned out - it makes the page much more dynamic and truer to my inspo image. 

I was really happy with the aesthetics of the population at this point, but I needed to introduce conditional randomness.
I decided that the male faces wearing the hats looked better without the moustache. To address this I introduced a conditional statement essentially saying - if the man is wearing a cap, make the likelihood of him having a stache much rarer. I applied this, testing out the look of different ranges in the random function. I stayed with the final chance (random(1,6)), as the stache was still present to add a bit of variation but it was super rare. This effect also made the hat faces look younger which suited the hat style and added greater variation to the age of the faces overall.

The final outcome, although not completely true to my initial idea, is still something I'm quite proud of. I think its captured the general essence of my original inspiration while staying true to my goal of having a huge amount of variation. If I'd had more time I would have undergone much more random testing to see how much I could change without breaking the balanced feeling of the page, but unfortunately I ran out of time. If I'd done the project again, I would have given myself a better face framework/aesthetic that catered better to different forms of randomness. 


