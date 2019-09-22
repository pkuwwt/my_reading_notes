
all: package

package: src/main/java/hello/*.java pom.xml
	mvn package

run: target/gs-spring-boot-0.1.0.jar
	java -jar $<

