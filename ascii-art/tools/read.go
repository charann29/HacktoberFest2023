package tools

import (
	"bufio"
	"os"
)

func AsciiFile(fileName string) ([]string, error)   {
	file, err := os.Open(fileName)
	tab := []string{}
	if err != nil {
		return nil, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	
	for scanner.Scan() {
		tab = append(tab, scanner.Text())
	}
	return tab, nil
}