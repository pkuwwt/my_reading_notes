
// spring run HelloController.groovy
@RestController
class HelloController {
	@RequestMapping("/")
	def hello() {
		return "Hello World"
	}
}

