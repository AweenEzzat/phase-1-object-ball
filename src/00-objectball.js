function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 22,
                    blocks: 15,
                    slamDunks: 10
                },
            }
        }
    };
}

function numPointsScored(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData[team].players[playerName]) {
            return gameData[team].players[playerName].points
        }
    }
}

function shoeSize(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData[team].players[playerName]) {
            return gameData[team].players[playerName].shoe
        }
    }
}

function teamColors(teamName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData[team].teamName === teamName) {
            return gameData[team].colors;
        }
    }
}

function teamNames() {
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.away.teamName];
}

function playerNumbers(teamName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData[team].teamName === teamName) {
            return Object.values(gameData[team].players).map(player => player.number);
        }
    }
}

function playerStats(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData[team].players[playerName]) {
            return gameData[team].players[playerName];
        }
    }
}

function bigShoeRebounds() {
    const gameData = gameObject();
    let playerWithLargestShoe = null;
    let largestShoeSize = 0;

    for (const team in gameData) {
        const players = gameData[team].players;
        for (const player in players) {
            if (players[player].shoe > largestShoeSize) {
                largestShoeSize = players[player].shoe;
                playerWithLargestShoe = player;
            }
        }
    }

    return gameData.home.players[playerWithLargestShoe].rebounds || gameData.away.players[playerWithLargestShoe].rebounds;
}

