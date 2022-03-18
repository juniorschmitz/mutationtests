class Gato {
  som() {
    return "Miau"
  }

  idadeHumana(idade) {
    if (idade == 1) {
      return 15
    }
    else if (idade == 2) {
      return 25
    }
    else if (idade > 2) {
      return 25 + ((idade-2)*4)
    }
  }
}

class Cachorro {
  som() {
    return "Auau"
  }

  idadeHumana(idade) {
    return idade*7
  }
}

module.exports = {
  Gato : Gato,
  Cachorro : Cachorro
}
