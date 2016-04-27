using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;
using Technolog.DAL.Interfaces;
using Technolog.Infrastructure.Interfaces;
using Technolog.SL.DTO.Tool;
using Technolog.SL.Interfaces;
using Technolog.SL.Services;

namespace Technolog.SL.Test
{
    [TestFixture]
    public class ToolServiceTest
    {
        private IToolService _toolService;
        private Mock<IToolRepository> _mockToolRepository;
        private Tool _tool;

        [SetUp]
        public void Init()
        {
            _tool = new Tool() { Id = 10, Name = "Молоток" };

            var mockUnitOfWork = new Mock<IUnitOfWork>();
            var mockToolRepository = new Mock<IToolRepository>();
            var mockMapper = new Mock<IMapper>();
            mockToolRepository.Setup(r => r.GetById(10)).Returns(_tool);
            mockUnitOfWork.Setup(u => u.Tools).Returns(mockToolRepository.Object);

            _toolService = new ToolService(mockUnitOfWork.Object, mockMapper.Object);
            _mockToolRepository = mockToolRepository;

        }

        [Test]
        public void GetById_ReturnsTool()
        {
            ToolDTO toolDTO = _toolService.Get(_tool.Id);

            Assert.That(toolDTO.Id, Is.EqualTo(_tool.Id));
        }

        [Test]
        public void Insert_AddToRepository()
        {
            ToolDTO toolDTO = new ToolDTO() { Id = 4, Name = "Отвертка" };
            Tool tool = null;

            _mockToolRepository.Setup(r => r.Add(It.IsAny<Tool>())).Callback<Tool>(t => tool = t);

            _toolService.Insert(toolDTO);

            Assert.That(tool.Id, Is.EqualTo(toolDTO.Id));
        }

        [Test]
        public void Update_UpdateInstanceInRepository()
        {
            ToolDTO toolDTO = new ToolDTO() { Id = 4, Name = "Отвертка" };
            Tool tool = null;

            _mockToolRepository.Setup(r => r.Update(It.IsAny<Tool>())).Callback<Tool>(t => tool = t);

            _toolService.Update(toolDTO);

            Assert.That(tool.Id, Is.EqualTo(toolDTO.Id));
        }

        [Test]
        public void Delete_DeleteTool()
        {
            _toolService.Delete(_tool.Id);
            _mockToolRepository.Verify(m => m.DeleteById(_tool.Id));
        }

        [Test]
        public async Task Delete_DeleteToolAsync()
        {
            await _toolService.DeleteAsync(_tool.Id);
            _mockToolRepository.Verify(m => m.DeleteById(_tool.Id));
        }
    }
}
