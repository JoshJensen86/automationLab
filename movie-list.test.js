const {Builder, Capabilities, By} = require ('selenium-webdriver')

require ('chromedriver')

const driver = new Builder ().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get ('http://127.0.0.1:5501/movieList/index.html')
})

afterAll (async () => {
    await (await driver).quit()
})

test ('add a movie', async () => {
    let searchBar = await driver.findElement(By.xpath('//input'))
    await searchBar.sendKeys("avengers\n")
    await driver.sleep(2000)

})

// test ('remove a movie', async () => {
//     let deleteMovie = await driver.findElement(By.id('avengers'))
//     await deleteMovie.click()
//     await driver.sleep(2000)
// }
// )

test ('cross off a movie', async () => {
    let crossOffMovie = await driver.findElement(By.xpath('//avengersbutton'))
    await crossOffMovie.click()
    await driver.sleep(2500)
})