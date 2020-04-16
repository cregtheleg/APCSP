function setup () {
    let count = 1
    let Headcount = 0  
    let Streak = 0
    let HighStreak = 0
    let FlipCount = 0
    

    while (HighStreak < 12) {
        // count += 1
        flip = Math.floor(random(2))
        // console.log(flip)
        FlipCount += 1
        if (flip < 1) {
            // console.log(`Heads: ${Headcount}`)
            Streak = 0
        } else {
            Headcount += 1
            // console.log(`Heads: ${Headcount}`)
            Streak += 1
            if (Streak > HighStreak) {
                HighStreak = Streak
            }
        }
    }
    console.log (`Total Amount of Heads is: ${Headcount}`)
    console.log(`Longest Streak of Heads is: ${HighStreak}`)
    console.log(`Total Flips: ${FlipCount}`)
}
