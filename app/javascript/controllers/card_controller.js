import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Card Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  /*
   * Regular Stimulus lifecycle methods
   * Learn more at: https://stimulusjs.org/reference/lifecycle-callbacks
   *
   * If you intend to use this controller as a regular stimulus controller as well,
   * make sure any Stimulus lifecycle methods overridden in ApplicationController call super.
   *
   * Important:
   * By default, StimulusReflex overrides the -connect- method so make sure you
   * call super if you intend to do anything else when this controller connects.
  */

  connect () {
    super.connect()
    // add your code here, if applicable
  }

  /* Reflex specific lifecycle methods.
   *
   * For every method defined in your Reflex class, a matching set of lifecycle methods become available
   * in this javascript controller. These are optional, so feel free to delete these stubs if you don't
   * need them.
   *
   * Important:
   * Make sure to add data-controller="card" to your markup alongside
   * data-reflex="Card#dance" for the lifecycle methods to fire properly.
   *
   * Example:
   *
   *   <a href="#" data-reflex="click->Card#dance" data-controller="card">Dance!</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "Card#dance"
   *
   *   error/noop - the error message (for reflexError), otherwise null
   *
   *   reflexId - a UUID4 or developer-provided unique identifier for each Reflex
   */

  // beforeCreate(element, reflex, noop, reflexId) {
  //  console.log("before create", element, reflex, reflexId)
  // }

  // createSuccess(element, reflex, noop, reflexId) {
  //   console.log("create success", element, reflex, reflexId)
  // }

  // createError(element, reflex, error, reflexId) {
  //   console.error("create error", element, reflex, error, reflexId)
  // }

  // createHalted(element, reflex, noop, reflexId) {
  //   console.warn("create halted", element, reflex, reflexId)
  // }

  // afterCreate(element, reflex, noop, reflexId) {
  //   console.log("after create", element, reflex, reflexId)
  // }

  // finalizeCreate(element, reflex, noop, reflexId) {
  //   console.log("finalize create", element, reflex, reflexId)
  // }
}
