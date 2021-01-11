'use strict'

class EdadUsuario {
  get rules () {
    return {
      edad:'required|integer'
    }
  }
}

module.exports = EdadUsuario
