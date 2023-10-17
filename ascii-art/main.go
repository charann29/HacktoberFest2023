package main

import (
	"ascii-art/tools"
	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		return
	}
	tab, err := tools.AsciiFile("./banner/standard.txt")
	if err != nil {
		fmt.Println(err)
	}
	args := tools.Management(os.Args[1])
	tools.WriteFile(args, tab)
}
