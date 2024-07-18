/// <reference types="cypress" />
import {TodoPage} from '../page-objects/todo'


describe('test todo', () => { 
  const todoPage = new TodoPage()


  it('Añadir tarea', () =>{
    todoPage.navegarWeb()
    todoPage.añadirTarea()

  })

  it('marcarTarea', () =>{
    todoPage.navegarWeb()
    todoPage.añadirTarea()
    todoPage.marcarTarea()
  })

  it('limpiarTarea', () =>{
    todoPage.navegarWeb()
    todoPage.añadirTarea()
    todoPage.marcarTarea()
    todoPage.limpiarTarea()
  })



})
  

  





