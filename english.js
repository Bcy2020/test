var sentence=[
"The mountain has trees and branches, and the heart is happy with you. You don't know.",
"If life is just like the first sight, why is the autumn wind sad to draw a fan.",
"It's hard to be water, but Wushan is not a cloud.",
"Ten years of life and death are boundless. If you don't think about it, you'll never forget it.",
"Acacia is without words. Don't spend tears on flower paper.",
"It's sad to say goodbye. The last two should be the same. It's impossible to complain about the moon.",
"Thousands of gold longitudinal buy phase, such as Fu, pulse, who tells this situation.",
"The everlasting longing for each other, my heart is long, my heart is long, my memory is short.",
"Sentimental since ancient times, it hurts to leave. It's more embarrassing to ignore the Qingqiu Festival.",
"The still waters flow deep, the vicissitudes of life sing; three lives are full of yin and Qing, and one day is full of joys and sorrows.",
"The mountain has trees and branches, and the heart is happy with you. You don't know.",
"The vast land is broken with a sword, where is the prosperity and singing.",
"Leaning on the clouds, thousands of pots hide loneliness, even if others laugh at me.",
"Once spring goes, beauty grows old, flowers fall and people die.",
"When all the flowers and pistils are exhausted, I will accompany you alone.",
"If you can enjoy life, you will have no regrets in death.",
"Store up eternal love and crush the red Acacia.",
"The exquisite dice, an Hongdou, are in love with each other.",
"All kinds of stories, but feelings hurt; easy water people go, the bright moon is like frost.",
"Give me three fireworks for your life.",
"Send you a song without asking. People will gather and disperse at the end of the song.",
"Little lotus just shows its sharp corners, and dragonflies have long stood on its head.",
"The crystal curtain moves, the breeze rises, and the rose yard is full of fragrance.",
"Cicadas make noise, the forest is more quiet, and birds sing, the mountain is more secluded.",
"The wind in the willow court is quiet, and people sleep in the day. The wind in the willow court is quiet.",
"In the fragrance of rice flowers, there is a good year. Listen to the sound of frogs.",
"Egrets fly in the desert paddy field, and orioles sing in the dark summer wood.",
"The grass firefly has a bright end, not fire. Although the lotus dew is a ball, it is not a pearl.",
"April is clear and the rain is clear, and Nanshan becomes clear.",
"A lotus still lives in the pond, and the wind in front of the sill sends a sweet smell.",
"When the water is full, sometimes you can see the herons, and when the grass is deep, frogs sing everywhere.",
"Valley birds sing on a sunny day, and river apes howl in the evening wind.",
"The rhombic leaves linger in the waves, the lotus wind blows, and the boat passes through the depths of the lotus.",
"The bitter night in midsummer is short, and the open porch is slightly cool.",
"Plum green, plum yellow, vegetable fat, wheat ripe, sericulture busy.",
"The lotus wants to talk, but it worries about killing the boatman.",
"When the mist and willow are dark, the clouds spend the moon, and the water flow is fireflies at the turning of dew and lotus.",
"White felt is laid on the poplar flowers in the grits path, and green money is stacked on the lotus leaves in the stream.",
"The traveling girl brings flowers to snuggle up with her partner and laugh, striving for being slim and graceful, and competing to fold the Group Lotus to cover the evening photos.",
"Yu Jian, the last general, is willing to go through fire and water for the Cao family for generations",
"Just face it and experience it.",
"Thousands of cranes in the spring sky are like dreams, and thousands of birds in the evening wave are like singing.",
"The reality has not been fragmented, because the dream is still struggling to support.",
"A hero's true colors can only be seen when the sea is flowing.",
"Where the leaves fly, the fire will never stop",
"You can let go of the kite line at any time, but don't expect me to come back.",
"I like you, but just like you.",
"Keep your passion for your hobbies and don't be too utilitarian!",
"You stop in the spring, in the unique spring.",
"People can't change people's hearts, and seriousness can't get deep love. No matter how well you do, some people will turn a blind eye; no matter how much you say, some people will turn a deaf ear.",
"No one is born an excellent person. You can not be excellent, but you can't lose motivation, make progress and waste your life.",
"Failure is not fun and sometimes miserable. But it's even worse to live a life that never fails carefully.",
"Try to fill up all the days. Don't let loneliness surround you. Please treat and cherish yourself and give yourself a strong reason. There is nothing in life that can't pass.",
"No road is flat, no mountain is rugged, and the sea will not be calm.",
"There is a story all the way back, a firm step down, and a clear distance up.",
"He who has light in his heart will break through all darkness and thorns.",
"You don't have to be brave. Time will heal you.",
"Don't mess with your heart, don't be trapped in your feelings, don't be afraid of the future, don't read the past, so be safe.",
"If the heart has no place to rest, it is wandering everywhere.",
"If I had known such a stumbling block, how could I not have known each other at the beginning.",
"Maybe I'm just a passer-by in your life, but you won't meet the second me.",
"Youth is a hasty book. We read it again and again with tears in our eyes.",
"All the unfairness in the world is due to the lack of capacity of the parties."
];
var len=sentence.length;
var randem=Math.floor(Math.random() * len);
var x=document.getElementsByClassName("B-Sentence-english");
for(i=0;i<x.length;i++)
{
    document.getElementsByClassName("B-Sentence-english")[i].innerHTML = sentence[randem];
}


function chinese_change(){
  randem=Math.floor(Math.random() * len);
  for(i=0;i<x.length;i++)
  {
      document.getElementsByClassName("B-Sentence-english")[i].innerHTML = sentence[randem];
  }
}
