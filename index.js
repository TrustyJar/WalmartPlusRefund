const puppeteer = require('puppeteer-extra')
const readlineSync = require('readline-sync')
const fs = require('fs')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const credentials = JSON.parse(fs.readFileSync('./configs.json', 'utf-8'));
const chromePaths =  require('chrome-paths')
const { Webhook, MessageBuilder } =  require('discord-webhook-node')
const colors = require('colors')
const prompts = require('prompts');

console.clear()
console.log('Welcome to' + ' ' + 'BUFFSQUAD AIO'.red);
console.log('Tony, Please unban me - Trusty'.yellow)
console.log('');
const options = ["Walmart Plus Cancel"]
let selected = readlineSync.keyInSelect(options, 'Select a Task')

if(selected >= 0) {
  if(selected == 0) {
    walmart()
  }
}

async function walmart(){

const hook = new Webhook(credentials.discordWebhook);
const prox = credentials.proxies
const proxyconfig = prox[Math.floor(Math.random() * prox.length)]

const savannah_url = 'https://www.walmart.com/account/login';
const lol_url = 'https://www.walmart.com/account/plus/cancel';
const b_url = 'https://media.discordapp.net/attachments/753494830688239750/947385365612863509/Screen_Shot_2022-02-27_at_1.50.56_AM.png';
const help_url = 'https://www.walmart.com/help?chatBot=open';
const accounts = credentials.accounts
const passwords = credentials.passwords
const billing = credentials.billingaddress
const card = credentials.fourcard


const canmessage1 = ["Hi, I ordered Walmart+ and I only had it for a few days. Can you please help me get a refund for it. I have no use for it. Can you help get the refund to the card on file?", "Can you please help me refund my Walmart plus, I have no use", "Hello, I want to get refunded for walmart plus. I never used it and have no need"]
const canmessage = canmessage1[Math.floor(Math.random() * canmessage1.length)]
const good1 = ["Is everything all good?", "Just confirming, refund will come soon, right?", "So everything is good?"]
const good = good1[Math.floor(Math.random() * good1.length)]
const perfect1 = ["Perfect! Have a great rest of your day.", "Thanks so much, really apprecaite", "Thank you!", "Thanks", "Okay, perfect"]
const perfect = perfect1[Math.floor(Math.random() * perfect1.length)]

for (let i = 0; i < accounts.length ; i++){
  
    async function givePage(){
        const browser = await puppeteer.launch({headless: false, executablePath: chromePaths.chrome, args: ['--proxy-server=' + proxyconfig], args: [`--window-size=500,900`], defaultViewport: null});
        const page = await browser.newPage();
        return {page, browser};
      }



async function go(page){
    await page.goto(savannah_url);
    console.log('Parsing Login'.yellow)
    await page.waitForTimeout(10);
    await page.type("input[id='email']", accounts[i],  {delay: 100});
    await page.waitForTimeout(10);
    await page.type("input[id='password']", passwords[i], {delay: 100});
    await page.waitForTimeout(10);
    await page.click("button[type='submit']",  elem => elem.click());  
    if (await page.$("div[id='px-captcha']") !== null){
        console.log('PerimiterX Ban'.red);
       }
    else{
    console.log('Successfully Logged In'.cyan)
    await page.waitForTimeout(1000);
    await page.goto(lol_url);
    await page.waitForTimeout(10);
    await page.waitForSelector("button[class='w_u w_w w_1 mb3 mb0-m w-auto']");  
    await page.click("button[class='w_u w_w w_1 mb3 mb0-m w-auto']",  elem => elem.click());  
    await page.waitForTimeout(10);
    await page.waitForSelector("input[class='w_ES']");
    await page.click("input[class='w_ES']",  elem => elem.click());  
    await page.waitForTimeout(10);
    await page.waitForSelector("button[class='w_u w_w w_1 mb3 mb0-m w-auto']");
    await page.click("button[class='w_u w_w w_1 mb3 mb0-m w-auto']",  elem => elem.click());  
    console.log('Cancelled Walmart Plus'.green);
    await page.waitForTimeout(1000);
    await page.goto(help_url);
    console.log('Refunding WM+'.cyan);  
    await page.waitForTimeout(5000);
    await page.waitForSelector("textarea[aria-label='Type a message']");
    await page.type("textarea[aria-label='Type a message']", 'Something else' ,  {delay: 100});
    await page.waitForTimeout(300);
    await page.click("button[class='wc-send']", elem => elem.click());   
    await page.waitForTimeout(5000);
    await page.click("button[title='Walmart+']", elem => elem.click());
    await page.waitForTimeout(5000);
    await page.type("textarea[aria-label='Type a message']", 'Something else' ,  {delay: 100});
    await page.waitForTimeout(300);
    await page.click("button[class='wc-send']", elem => elem.click());   
    await page.waitForTimeout(5000);
    await page.waitForSelector("button[title='Start chat (1 min wait)']");
    await page.click("button[title='Start chat (1 min wait)']", elem => elem.click());
    await page.type("textarea[aria-label='Type a message']", canmessage ,  {delay: 100});
    await page.waitForTimeout(300);
    await page.click("button[class='wc-send']", elem => elem.click());   
    await page.waitForTimeout(60000);
    if (await page.$("circle[id='Oval-2-Copy-3']") !== null){
      await page.click("textarea[aria-label='Type a message']", elem => elem.click());   
      await page.type("textarea[aria-label='Type a message']", 'Hi, I hope you are having a nice day' ,  {delay: 100});   
      await page.waitForTimeout(300);
      await page.click("button[class='wc-send']", elem => elem.click());   
      await page.waitForTimeout(1000);
      await page.type("textarea[aria-label='Type a message']", 'My email is' + ' ' +  accounts[i] + ', my billing address is' + ' ' + billing[i] + ', and the last for digits of my card are' + ' ' + card[i] + '. I sent the details above' ,  {delay: 50});   
      await page.waitForTimeout(300);
      await page.click("button[class='wc-send']", elem => elem.click());   
    }
  else{
    await page.waitForTimeout(30000);
  }
  await page.click("textarea[aria-label='Type a message']", elem => elem.click());   
  await page.type("textarea[aria-label='Type a message']", 'just letting u know, this is the Walmart Plus Subscription not an item. I dont think it has an order number. Just in my account settings' ,  {delay: 100});   
  await page.waitForTimeout(300);
  await page.click("button[class='wc-send']", elem => elem.click());   
  await page.waitForTimeout(300000);
  await page.click("textarea[aria-label='Type a message']", elem => elem.click());   
  await page.type("textarea[aria-label='Type a message']", good ,  {delay: 100});   
  await page.waitForTimeout(300);
  await page.click("button[class='wc-send']", elem => elem.click());   
  await page.waitForTimeout(15000);
  await page.click("textarea[aria-label='Type a message']", elem => elem.click());   
  await page.type("textarea[aria-label='Type a message']", perfect ,  {delay: 100}); 
  await page.waitForTimeout(300);
  await page.click("button[class='wc-send']", elem => elem.click());     
  await page.waitForTimeout(5000);
  await page.click("textarea[aria-label='Type a message']", elem => elem.click());   
  await page.type("textarea[aria-label='Type a message']", 'Thanks again, I really apprecaite your time. That is all, have a nice day ( :' ,  {delay: 100}); 
  await page.waitForTimeout(300);
  await page.click("button[class='wc-send']", elem => elem.click());  
  console.log('Successfully Recieved Refund! Check Email'.green)
  await browser.close()

    hook.setUsername('BUFFSQUAD AIO');
    hook.setAvatar(b_url);
    
    const embed = new MessageBuilder()
    .setTitle('🛒Successfully Canceled WM+🛒')
    .addField('Site', 'Walmart')
    .addField('Email', '||' + accounts[i] + '||', true)
    .addField('Password', '||' + passwords[i] + '||')
    .setColor('#000000')
    .setThumbnail('https://cdn.corporate.walmart.com/dims4/WMT/31f79e1/2147483647/strip/true/crop/2400x1260+0+170/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fb6%2Fc6%2F5e1cb86e49f6948b3298e76c1123%2Fpress-hero-1.jpg') 
    .setDescription('')
    .setImage('')
    .setFooter('SplashAIO', 'https://pbs.twimg.com/profile_images/1455748437001981953/ZUUIYdNO_400x400.jpg')
    .setTimestamp();
    
    hook.send(embed);

}}

   
async function checkout(){
  var {page, browser} = await givePage();
  await go(page, browser);
  }
  
  checkout();

}}
