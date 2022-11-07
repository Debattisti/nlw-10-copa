function createGame(player1, hour, player2) {
  return `
        <li>
              <img src="./assets/icon-${player1}.svg" 
              alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg"
              alt= "Bandeira da ${player2}" />
        </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: .8">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
      </div>
 `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "south-korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "brazil") +
      createGame("south-korea", "10:00", "ghana") +
      createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south-korea", "07:00", "portugal") +
      createGame("ghana", "10:00", "uruguay") +
      createGame("serbia", "13:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  )
