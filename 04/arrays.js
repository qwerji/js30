    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ]

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 
        'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
        'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 
        'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
        'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 
        'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 
        'Blair, Tony', 'Blake, William']

    let question = 1

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    const fifteenhundreds = inventors.filter(inv => (inv.year < 1600) && (inv.year > 1499))
    // [ { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    //   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 } ]
    console.log(question++ + '------------------------------------')
    console.log(fifteenhundreds)

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names

    const names = inventors.map(inv => `${inv.first} ${inv.last}`)
    // [ 'Albert Einstein',
    //   'Isaac Newton',
    //   'Galileo Galilei',
    //   'Marie Curie',
    //   'Johannes Kepler',
    //   'Nicolaus Copernicus',
    //   'Max Planck',
    //   'Katherine Blodgett',
    //   'Ada Lovelace',
    //   'Sarah E. Goode',
    //   'Lise Meitner',
    //   'Hanna Hammarström' ]
    console.log(question++ + '------------------------------------')
    console.log(names)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    const sortByBirth = inventors.sort((a,b) => a.year > b.year ? 1 : -1)
    // [ { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    //   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    //   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    //   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    //   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    //   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
    //   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    //   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    //   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    //   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    //   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    //   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 } ]
    console.log(question++ + '------------------------------------')
    console.log(sortByBirth)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?

    const lifespan = inventors.reduce((total, inv) => { return (inv.passed - inv.year) + total }, 0)
    // 861
    console.log(question++ + '------------------------------------')
    console.log(lifespan)

    // 5. Sort the inventors by years lived

    const sortByAge = inventors.sort((a,b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1, 0)
    // [ { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    //   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    //   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    //   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    //   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    //   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    //   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    //   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
    //   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    //   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    //   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    //   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 } ]
    console.log(question++ + '------------------------------------')
    console.log(sortByAge)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

    // In the JavaScript console at 'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris':

    //const links = document.getElementsByClassName('mw-category')[0].getElementsByTagName('a')
    //const list = [...links]
    // const boulevards = list.map(link => link.textContent)
    const boulevards = [ "Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", 
      "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", 
      "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", 
      "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", 
      "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard de Rochechouart", 
      "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", 
      "Boulevard Voltaire", "Boulevard de la Zone" ]

    const de = boulevards.filter(boulevard => boulevard.includes('de'))
    // [ "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", 
    //   "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard de Rochechouart", "Boulevard de Sébastopol", 
    //   "Boulevard de Strasbourg", "Boulevard de la Zone" ]
    console.log(question++ + '------------------------------------')
    console.log(de)

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    const alpha = people.sort((a,b) => {
        const [aLast, aFirst] = a.split(', '),
              [bLast, bFirst] = b.split(', ')
        return aLast > bLast ? 1 : -1
    })
    // [ 'Beck, Glenn',
    //   'Becker, Carl',
    //   'Beckett, Samuel',
    //   'Beddoes, Mick',
    //   'Beecher, Henry',
    //   'Beethoven, Ludwig',
    //   'Begin, Menachem',
    //   'Belloc, Hilaire',
    //   'Bellow, Saul',
    //   'Ben-Gurion, David',
    //   'Benchley, Robert',
    //   'Benenson, Peter',
    //   'Benjamin, Walter',
    //   'Benn, Tony',
    //   'Bennington, Chester',
    //   'Benson, Leana',
    //   'Bent, Silas',
    //   'Bentsen, Lloyd',
    //   'Berger, Ric',
    //   'Bergman, Ingmar',
    //   'Berio, Luciano',
    //   'Berle, Milton',
    //   'Berlin, Irving',
    //   'Berne, Eric',
    //   'Bernhard, Sandra',
    //   'Berra, Yogi',
    //   'Berry, Halle',
    //   'Berry, Wendell',
    //   'Bethea, Erin',
    //   'Bevan, Aneurin',
    //   'Bevel, Ken',
    //   'Biden, Joseph',
    //   'Bierce, Ambrose',
    //   'Biko, Steve',
    //   'Billings, Josh',
    //   'Biondo, Frank',
    //   'Birrell, Augustine',
    //   'Black, Elk',
    //   'Blair, Robert',
    //   'Blair, Tony',
    //   'Blake, William' ]
    console.log(question++ + '------------------------------------')
    console.log(alpha)

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]

    const amounts = data.reduce((total, vehicle) => {
        if (!total[vehicle]) {
            total[vehicle] = 1
        } else {
            total[vehicle]++
        }
        return total
    }, {})
    // { car: 5, truck: 3, bike: 2, walk: 2, van: 2 }
    console.log(question++ + '------------------------------------')
    console.log(amounts)
