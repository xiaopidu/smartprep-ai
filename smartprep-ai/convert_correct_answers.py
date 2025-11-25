#!/usr/bin/env python3
import os
import re

def convert_correct_answers():
    # 定义数字到字母的映射
    number_to_letter = {
        '0': 'A',
        '1': 'B', 
        '2': 'C',
        '3': 'D'
    }
    
    # 章节题库文件目录
    chapter_dir = "services/chapterQuestions"
    
    # 遍历所有章节题库文件
    for filename in os.listdir(chapter_dir):
        if filename.endswith(".ts"):
            filepath = os.path.join(chapter_dir, filename)
            print(f"处理文件: {filepath}")
            
            # 读取文件内容
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 替换单选题的correctAnswer
            # 匹配格式: correctAnswer: '数字'
            for num, letter in number_to_letter.items():
                pattern = f"correctAnswer: '{num}'"
                replacement = f"correctAnswer: '{letter}'"
                content = content.replace(pattern, replacement)
            
            # 替换多选题的correctAnswer数组
            # 匹配格式: correctAnswer: ['数字1', '数字2', ...]
            for num, letter in number_to_letter.items():
                pattern = f"'{num}'"
                replacement = f"'{letter}'"
                # 只在correctAnswer数组中进行替换
                content = re.sub(
                    r"(correctAnswer: \[)([^\]]*)(\])",
                    lambda m: m.group(1) + re.sub(f"'{num}'", f"'{letter}'", m.group(2)) + m.group(3),
                    content
                )
            
            # 写回文件
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"完成文件: {filepath}")

if __name__ == "__main__":
    convert_correct_answers()
    print("所有correctAnswer转换完成！")