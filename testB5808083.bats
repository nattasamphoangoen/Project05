#!/usr/bin/env bats
#b5808083
#testbastcalendar



@test "title field ต้องไม่ Null" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{}' http://localhost:8080/api/calendars | jq .)
	echo $json | grep "may not be null"
}

@test "dateTime field ต้องไม่ Null" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{}' http://localhost:8080/api/calendars | jq .)
	echo $json | grep "may not be null"
}

@test "title field รับค่าได้ปกติ แต่ title รับค่ามากกว่า 20 ตัว" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"title": "ABBBBABBBBABBBBABBBBA"}' http://localhost:8080/api/calendars | jq .)
	echo $json | grep "Size.message"
}

@test "title field รับค่าได้ปกติ แต่ title รับค่าน้อยกว่า 6 ตัว" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"title": "ABBBB"}' http://localhost:8080/api/calendars | jq .)
	echo $json | grep "Size.message"
}

@test "dateTime field ไม่รับตัวอักษร" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"dateTime": "Hello"}' http://localhost:8080/api/calendars | jq .)
	echo $json | grep "Hello"
}